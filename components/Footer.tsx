// import react from 'react';
import footer from '../src/assets/img/logo/Footer.svg';

const Footer: React.FC = () => {
    return (
        <footer className="footer footer-style-4">
      <div className="container">
        <div className="widget-wrapper">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="logo">
                  <a href="#home"> <img src={footer} alt="Luis Ángel, inicio" loading="lazy" /> </a>
                </div>
                <p className="desc">Si tienes alguna propuesta o simplemente quieres saludar, te invito a conectar conmigo en mis redes sociales.</p>
                <ul className="socials">
                  <li> <a href="https://x.com/Zadkiieel_" aria-label="Luis Ángel en X"> <i className="lni lni-twitter-filled" aria-hidden="true"></i> </a> </li>
                  <li> <a href="https://www.linkedin.com/in/luis-angel-aguilar-valdovinos-0567902a7/" aria-label="Luis Ángel en LinkedIn"> <i className="lni lni-linkedin-original" aria-hidden="true"></i> </a> </li>
                  <li> <a href="https://github.com/Luanva-G" aria-label="Luis Ángel en GitHub"> <i className="lni lni-github-original" aria-hidden="true"></i> </a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrapper">
          <p>
           Construyendo software, cazando bugs.
          </p>
        </div>
      </div>
    </footer>
    );
}

export default Footer;