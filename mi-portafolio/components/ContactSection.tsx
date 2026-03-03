import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="contact-section contact-style-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-10">
            <div className="section-title text-center mb-50">
              <h3 className="mb-15">Get in touch</h3>
              <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <form action="assets/php/contact.php" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-input">
                      <input type="text" id="name" name="name" className="form-input" placeholder="Name" />
                      <i className="lni lni-user"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input">
                      <input type="email" id="email" name="email" className="form-input" placeholder="Email" />
                      <i className="lni lni-envelope"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input">
                      <input type="text" id="number" name="number" className="form-input" placeholder="Number" />
                      <i className="lni lni-phone"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input">
                      <input type="text" id="subject" name="subject" className="form-input" placeholder="Subject" />
                      <i className="lni lni-text-format"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input">
                      <textarea name="message" id="message" className="form-input" placeholder="Message" rows="6"></textarea>
                      <i className="lni lni-comments-alt"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-button">
                      <button type="submit" className="button"> <i className="lni lni-telegram-original"></i> Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="left-wrapper">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="single-item">
                    <div className="icon">
                      <i className="lni lni-phone"></i>
                    </div>
                    <div className="text">
                      <p>0045939863784</p>
                      <p>+004389478327</p>
                    </div>
                  </div>
                </div>
                {/* Puedes agregar aquí los otros bloques de información de contacto */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default ContactSection;