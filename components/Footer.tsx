// import react from 'react';
import footer from '../src/assets/img/logo/Footer.svg';

const Footer: React.FC = () => {
    return (
        <footer className="footer footer-style-4">
      <div className="container">
        <div className="widget-wrapper">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget wow fadeInUp" data-wow-delay=".2s">
                <div className="logo">
                  <a href="#0"> <img src={footer} alt="Footer Logo" /> </a>
                </div>
                <p className="desc">Si tienes alguna propuesta o simplemente quieres saludar, te invito a conectar conmigo en mis redes sociales.</p>
                <ul className="socials">
                  {/* <li> <a href="#0"> <i className="lni lni-facebook-filled"></i> </a> </li> */}
                  <li> <a href="https://x.com/Zadkiieel_"> <i className="lni lni-twitter-filled"></i> </a> </li>
                  {/* <li> <a href="#0"> <i className="lni lni-instagram-filled"></i> </a> </li> */}
                  <li> <a href="https://www.linkedin.com/in/luis-angel-aguilar-valdovinos-0567902a7/"> <i className="lni lni-linkedin-original"></i> </a> </li>
                  <li> <a href="https://github.com/Luanva-G"> <i className="lni lni-github-original"></i> </a> </li>
                </ul>
              </div>
            </div>
            {/* Agrega aquí los demás bloques de enlaces del Footer */}
          </div>
        </div>
        <div className="copyright-wrapper wow fadeInUp" data-wow-delay=".2s">
          <p>
           Construyendo software, cazando bugs.
          </p>
        </div>
      </div>
    </footer>
    );
}

export default Footer;