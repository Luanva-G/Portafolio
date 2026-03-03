import react from 'react';

const HeroSection: React.FC = () => {
    return (
        <div 
      className="hero-section hero-style-5 img-bg" 
      style={{ backgroundImage: "url('assets/img/hero/hero-5/hero-bg.svg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content-wrapper">
              <h2 className="mb-30 wow fadeInUp" data-wow-delay=".2s">You're Using Free Lite Version</h2>
              <p className="mb-30 wow fadeInUp" data-wow-delay=".4s">Please purchase full version of the template to get all sections and permission to use with commercial projects.</p>
              <a href="#0" className="button button-lg radius-50 wow fadeInUp" data-wow-delay=".6s">
                Get Started <i className="lni lni-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 align-self-end">
            <div className="hero-image wow fadeInUp" data-wow-delay=".5s">
              <img src="assets/img/hero/hero-5/hero-img.svg" alt="Hero Illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default HeroSection;