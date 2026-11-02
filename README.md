# Portafolio de Luis Ángel

Portafolio personal de Luis Ángel Aguilar Valdovinos, estudiante de Ingeniería de Sistemas enfocado en desarrollo backend. Incluye presentación, proyectos, servicios y contacto. Conserva las ilustraciones y la tarifa originales.

## Tecnologías y requisitos

React 19, TypeScript, Vite 7, Bootstrap 5 instalado desde npm, CSS de Lindy, LineIcons y EmailJS. El menú, el seguimiento de secciones y el botón de volver arriba se gestionan en React, sin scripts de plantilla ni Bootstrap por CDN.

Usa Node.js `^20.19.0 || >=22.12.0` y npm. No se incluye una URL de clonación porque no está confirmada la del repositorio de este portafolio.

## Desarrollo

Desde la carpeta del repositorio:

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Vite muestra en consola la dirección local disponible. El formulario requiere configuración adicional; las demás secciones funcionan sin ella.

## Configurar contacto

Completa en `.env.local` los valores públicos de tu cuenta de EmailJS:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

La plantilla debe utilizar los campos `name`, `email`, `title` y `message`. Configura destinatario y dirección de respuesta en tu cuenta. Las variables `VITE_*` son públicas y se incluyen en el JavaScript generado: nunca deben contener secretos de servidor. En alojamiento, configúralas antes de compilar; después de cambiarlas, reinicia Vite o recompila.

Si falta configuración, el formulario conserva el texto e indica el correo alternativo. Durante el envío bloquea nuevas solicitudes; ante fallos conserva los campos y anuncia el resultado. Solo vacía el formulario al recibir éxito. Las comprobaciones automatizadas deben interceptar EmailJS para simular respuestas sin entregar correos.

## Añadir proyectos

Edita `src/data/projects.ts`. Cada proyecto tiene un identificador estable, título, descripción, tecnologías, imagen local importada y texto alternativo. Repositorio y demo son opcionales; sin una URL HTTP(S) válida no se muestra el botón correspondiente.

La presentación utiliza `components/ProjectCard.tsx` dentro de una cuadrícula responsiva. No dupliques las tarjetas. Documenta el problema resuelto y tu contribución con información real. Para proyectos backend, describe API, persistencia, autenticación, arquitectura o pruebas únicamente si están implementadas. No añadas métricas ni enlaces de ejemplo.

Los dos proyectos originales se conservan. Faltan los datos de los nuevos proyectos y las URLs de repositorio y contribuciones detalladas no disponibles de los existentes.

## Estructura

```text
components/              Componentes de la página
src/
  assets/                Ilustraciones, capturas, CSS y fuente de iconos
  data/projects.ts       Colección tipada de proyectos
  lib/contact.ts         Envío de contacto verificable sin red
  App.tsx                Estructura semántica de la página
  main.tsx               Entrada e importación única de estilos
  index.css              Ajustes, navegación y accesibilidad
index.html               Idioma y metadatos
tests/contact.test.mjs   Simulaciones de envío sin red
AGENTS.md                Instrucciones y seguimiento del trabajo
```

## Comprobaciones

```sh
npm test
npm run lint
npm run build
npm run preview
```

`npm test` simula configuración ausente, éxito, errores, reintento y envíos concurrentes mediante un transporte falso; no realiza solicitudes a EmailJS. La validación HTML y la interacción visual requieren navegador.

`build` comprueba TypeScript y genera `dist/`; no edites esos archivos manualmente. `preview` sirve la compilación de producción localmente, sin publicar.

Revisa móvil, tableta y escritorio: menú, Escape, enlaces por anclas, sección activa, foco por teclado, salto al contenido, tarjetas, imágenes y ausencia de desbordamiento. Prueba también la preferencia de movimiento reducido y enlaces directos a secciones. Simula configuración ausente, respuesta correcta, error y envío duplicado del formulario sin enviar correos reales.

Los metadatos usan información personal ya presente en el proyecto. La URL canónica y la imagen social quedan pendientes hasta conocer el dominio definitivo y el recurso apropiado.

## Licencia

MIT. Consulta `LICENSE`.
