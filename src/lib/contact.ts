export interface ContactStatus {
  type: 'success' | 'error' | 'sending' | null;
  message: string;
}

interface ContactConfig {
  serviceId?: string;
  templateId?: string;
  publicKey?: string;
}

interface ContactDependencies {
  config: ContactConfig;
  sendForm: (serviceId: string, templateId: string, form: HTMLFormElement, options: { publicKey: string }) => Promise<unknown>;
  onStatus: (status: ContactStatus) => void;
}

// Una única instancia por formulario conserva el bloqueo incluso antes del siguiente render.
export function createContactSender({ config, sendForm, onStatus }: ContactDependencies) {
  let sending = false;
  return async (form: HTMLFormElement) => {
    if (sending) return;
    const serviceId = config.serviceId?.trim();
    const templateId = config.templateId?.trim();
    const publicKey = config.publicKey?.trim();
    if (!serviceId || !templateId || !publicKey) {
      onStatus({ type: 'error', message: 'El formulario no está disponible en este momento. Puedes escribirme al correo que aparece aquí.' });
      return;
    }
    sending = true;
    onStatus({ type: 'sending', message: 'Enviando mensaje…' });
    try {
      await sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      onStatus({ type: 'success', message: '¡Mensaje enviado! Gracias por contactarme.' });
    } catch {
      onStatus({ type: 'error', message: 'No se pudo enviar el mensaje. Conservamos tu texto para que puedas reintentarlo o escribirme por correo.' });
    } finally {
      sending = false;
    }
  };
}
