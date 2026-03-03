import react from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="about-section about-style-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="about-content-wrapper">
              <div className="section-title mb-30">
                <h3 className="mb-25 wow fadeInUp" data-wow-delay=".2s">The future of designing starts here</h3>
                <p className="wow fadeInUp" data-wow-delay=".3s">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed,</p>
              </div>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".35s">
                  <i className="lni lni-checkmark-circle"></i>
                  Stop wasting time and money designing and managing a website that doesn’t get results.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <i className="lni lni-checkmark-circle"></i>
                  Stop wasting time and money designing and managing.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".45s">
                  <i className="lni lni-checkmark-circle"></i>
                  Stop wasting time and money designing and managing a website that doesn’t get results.
                </li>
              </ul>
              <a href="#0" className="button button-lg radius-10 wow fadeInUp" data-wow-delay=".5s">Learn More</a>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="about-image text-lg-right wow fadeInUp" data-wow-delay=".5s">
              <img src="assets/img/about/about-4/about-img.svg" alt="About Illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AboutSection;