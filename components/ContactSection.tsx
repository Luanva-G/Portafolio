import React, { useState} from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const ContactSection: React.FC = () => {

  const form = React.useRef<HTMLFormElement>(null);

    const [status, setStatus] = useState<{ 
    type: 'success' | 'error' | 'sending' | null; 
    message: string 
  }>({ type: null, message: '' });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    setStatus({ type: 'sending', message: 'Enviando mensaje...' });


    try {
      const result = await emailjs.sendForm(
        SERVICE_ID, 
        TEMPLATE_ID, 
        form.current, 
        PUBLIC_KEY
      );

      console.log('Email enviado exitosamente:', result.text);
      setStatus({ type: 'success', message: '¡Mensaje enviado! Gracias por contactarme.' });
      form.current.reset(); 

    } catch (err) {
      const error = err as EmailJSResponseStatus;
      console.error('Error al enviar el email:', error.text);
      setStatus({ type: 'error', message: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.' });
      alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  // Estilo común para asegurar visibilidad del texto al escribir
  const inputStyle = { color: '#212529' };

  return (
    <section id="contact" className="contact-section contact-style-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-10">
            <div className="section-title text-center mb-50">
              <h3 className="mb-15">¡Hablemos!</h3>
              <p>¿Tienes un proyecto en mente o buscas un desarrollador para tu equipo? Envíame un mensaje y te responderé lo más pronto posible.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-input">
                      <input type="text" name="name" className="form-input" placeholder="Nombre" required style={inputStyle} />
                      <i className="lni lni-user"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input">
                      <input type="text" name="email" className="form-input" placeholder="Correo Electrónico" required style={inputStyle}/>
                      <i className="lni lni-envelope"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input">
                      <input type="text" name="title" className="form-input" placeholder="Asunto" required style={inputStyle} />
                      <i className="lni lni-text-format"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input">
                      <textarea name="message" className="form-input" placeholder="Tu mensaje..." rows={6} required style={inputStyle}></textarea>
                      <i className="lni lni-comments-alt"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                   <div className="form-button d-flex align-items-center flex-wrap">
                      <button 
                        type="submit" 
                        className="button" 
                        disabled={status.type === 'sending'}
                      > 
                        <i className="lni lni-telegram-original"></i> 
                        {status.type === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                      </button>

                      {/* Notificación dinámica al lado del botón */}
                      {status.message && (
                        <span className={`ms-3 fw-bold ${
                          status.type === 'success' ? 'text-success' : 
                          status.type === 'error' ? 'text-danger' : 
                          'text-primary'
                        }`}>
                          {status.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="left-wrapper">
              <div className="row">
                <div className="col-lg-12 col-md-6 mt-4">
                  <div className="single-item">
                    <div className="icon">
                      <i className="lni lni-envelope"></i>
                    </div>
                    <div className="text">
                      <p>luisangelaguilarvaldovinos<br />@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 mt-4">
                  <div className="single-item">
                    <div className="icon">
                      <i className="lni lni-map-marker"></i>
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