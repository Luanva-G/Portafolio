import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

// Transpilar con la dependencia existente mantiene estas pruebas compatibles con Node 20.
const source = await readFile(new URL('../src/lib/contact.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { createContactSender } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
const validConfig = { serviceId: ' service_test ', templateId: ' template_test ', publicKey: ' public_test ' };

function fixture(config = validConfig, send = async () => {}) {
  const states = [];
  let resets = 0;
  let calls = 0;
  const form = { reset() { resets++; } };
  const submit = createContactSender({
    config,
    onStatus: status => states.push(status),
    sendForm: async (...args) => { calls++; return send(...args); },
  });
  return { form, submit, states, get resets() { return resets; }, get calls() { return calls; } };
}

test('configuración ausente, parcial o vacía no inicia envíos ni borra texto', async () => {
  for (const config of [{}, { ...validConfig, serviceId: '' }, { ...validConfig, templateId: undefined }, { ...validConfig, publicKey: '  ' }]) {
    const f = fixture(config);
    await f.submit(f.form);
    assert.equal(f.calls, 0);
    assert.equal(f.resets, 0);
    assert.equal(f.states.at(-1).type, 'error');
    assert.match(f.states.at(-1).message, /correo/);
  }
});

test('éxito usa configuración pública normalizada y limpia el formulario una vez', async () => {
  let received;
  const f = fixture(validConfig, async (...args) => { received = args; });
  await f.submit(f.form);
  assert.deepEqual(received, ['service_test', 'template_test', f.form, { publicKey: 'public_test' }]);
  assert.equal(f.resets, 1);
  assert.deepEqual(f.states.map(s => s.type), ['sending', 'success']);
});

test('rechazos de cualquier tipo conservan texto y permiten reintentar', async () => {
  for (const failure of [new Error('simulado'), { status: 400, text: 'simulado' }, null, 'simulado']) {
    let attempts = 0;
    const f = fixture(validConfig, async () => { if (++attempts === 1) throw failure; });
    await f.submit(f.form);
    assert.equal(f.resets, 0);
    assert.equal(f.states.at(-1).type, 'error');
    await f.submit(f.form);
    assert.equal(f.calls, 2);
    assert.equal(f.resets, 1);
    assert.equal(f.states.at(-1).type, 'success');
  }
});

test('dos envíos concurrentes producen una sola solicitud', async () => {
  let release;
  const f = fixture(validConfig, () => new Promise(resolve => { release = resolve; }));
  const pending = f.submit(f.form);
  await f.submit(f.form);
  assert.equal(f.calls, 1);
  assert.equal(f.resets, 0);
  assert.deepEqual(f.states.map(s => s.type), ['sending']);
  release();
  await pending;
  assert.equal(f.resets, 1);
  assert.equal(f.states.at(-1).type, 'success');
});
