import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { createContactSender } from '../src/lib/contact';
import type { ContactStatus } from '../src/lib/contact';

const ContactSection: React.FC = () => {

  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<ContactStatus>({ type: null, message: '' });
  const [submitContact] = useState(() => createContactSender({
    config: {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    },
    sendForm: (...args) => emailjs.sendForm(...args),
    onStatus: setStatus,
  }));

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentForm = form.current;
    if (!currentForm) return;
    for (const field of Array.from(currentForm.elements)) {
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
        field.setCustomValidity(field.required && !field.value.trim() ? 'Completa este campo con texto.' : '');
      }
    }
    if (!currentForm.reportValidity()) return;

    await submitContact(currentForm);
  };

  // Estilo común para asegurar visibilidad del texto al escribir
  const inputStyle = { color: '#212529' };

  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="contact-section contact-style-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-10">
            <div className="section-title text-center mb-50">
              <h2 id="contact-heading" className="h3 mb-15">¡Hablemos!</h2>
              <p>¿Tienes un proyecto en mente o buscas un desarrollador para tu equipo? Envíame un mensaje y te responderé lo más pronto posible.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <form ref={form} onSubmit={sendEmail} aria-busy={status.type === 'sending'}
                onInput={(event) => {
                  const field = event.target;
                  if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) field.setCustomValidity('');
                }}>
                <fieldset disabled={status.type === 'sending'}>
                  <legend className="visually-hidden">Enviar un mensaje a Luis Ángel</legend>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-input">
                      <label htmlFor="contact-name">Nombre</label>
                      <input id="contact-name" autoComplete="name" maxLength={150} type="text" name="name" className="form-input" placeholder="Nombre" required style={inputStyle} />
                      <i className="lni lni-user" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input">
                      <label htmlFor="contact-email">Correo electrónico</label>
                      <input id="contact-email" autoComplete="email" maxLength={254} type="email" name="email" className="form-input" placeholder="Correo Electrónico" required style={inputStyle}/>
                      <i className="lni lni-envelope" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input">
                      <label htmlFor="contact-title">Asunto</label>
                      <input id="contact-title" autoComplete="off" maxLength={150} type="text" name="title" className="form-input" placeholder="Asunto" required style={inputStyle} />
                      <i className="lni lni-text-format" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input">
                      <label htmlFor="contact-message">Mensaje</label>
                      <textarea id="contact-message" maxLength={5000} name="message" className="form-input" placeholder="Tu mensaje..." rows={6} required style={inputStyle}></textarea>
                      <i className="lni lni-comments-alt" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                   <div className="form-button d-flex align-items-center flex-wrap">
                      <button 
                        type="submit" 
                        className="button" 
                        disabled={status.type === 'sending'}
                      > 
                        <i className="lni lni-telegram-original" aria-hidden="true"></i> 
                        {status.type === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                      </button>


                    </div>
                  </div>
                </div>
                </fieldset>
                      <span role="status" aria-live="polite" aria-atomic="true" className={`contact-status fw-bold ${status.type === 'error' ? 'text-danger' : status.type === 'success' ? 'text-success' : 'text-primary'}`}>
                        {status.message}
                      </span>
              </form>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="left-wrapper">
              <div className="row">
                <div className="col-lg-12 col-md-6 mt-4">
                  <div className="single-item">
                    <div className="icon">
                      <i className="lni lni-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                      <a className="contact-email" href="mailto:luisangelaguilarvaldovinos@gmail.com">luisangelaguilarvaldovinos@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 mt-4">
                  <div className="single-item">
                    <div className="icon">
                      <i className="lni lni-map-marker" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                      <p>Lázaro Cárdenas, Michoacán<br />México</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;