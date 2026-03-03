import react from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer footer-style-4">
      <div className="container">
        <div className="widget-wrapper">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget wow fadeInUp" data-wow-delay=".2s">
                <div className="logo">
                  <a href="#0"> <img src="assets/img/logo/logo.svg" alt="Footer Logo" /> </a>
                </div>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis nulla placerat amet amet congue.</p>
                <ul className="socials">
                  <li> <a href="#0"> <i className="lni lni-facebook-filled"></i> </a> </li>
                  <li> <a href="#0"> <i className="lni lni-twitter-filled"></i> </a> </li>
                  <li> <a href="#0"> <i className="lni lni-instagram-filled"></i> </a> </li>
                  <li> <a href="#0"> <i className="lni lni-linkedin-original"></i> </a> </li>
                </ul>
              </div>
            </div>
            {/* Agrega aquí los demás bloques de enlaces del Footer */}
          </div>
        </div>
        <div className="copyright-wrapper wow fadeInUp" data-wow-delay=".2s">
          <p>Design and Developed by<a href="https://uideck.com" target="_blank" rel="noreferrer">UIdeck</a>
           Built-with <a href="https://uideck.com"  target="_blank" rel="noreferrer">Lindy UI Kit</a>
           </p>
        </div>
      </div>
    </footer>
    );
}

export default Footer;