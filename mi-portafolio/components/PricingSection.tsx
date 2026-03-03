import react from 'react';

const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="pricing-section pricing-style-4 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="section-title mb-60">
              <h3 className="mb-15 wow fadeInUp" data-wow-delay=".2s">Pricing Plan</h3>
              <p className="wow fadeInUp" data-wow-delay=".4s">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="pricing-active-wrapper wow fadeInUp" data-wow-delay=".4s">
              <div className="pricing-active">
                <div className="single-pricing-wrapper">
                  <div className="single-pricing">
                    <h6>Basic Design</h6>
                    <h4>Web Design</h4>
                    <h3>$ 29.00</h3>
                    <ul>
                      <li>Carefully crafted components</li>
                      <li>Amazing page examples</li>
                      <li>Super friendly support team</li>
                      <li>Awesome Support</li>
                    </ul>
                    <a href="#0" className="button radius-30">Get Started</a>
                  </div>
                </div>
                {/* Puedes replicar <div className="single-pricing-wrapper"> para los otros planes */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default PricingSection;