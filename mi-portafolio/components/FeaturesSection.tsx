import react from 'react';

const FeaturesSection: React.FC = () => {
    return (
<section id="feature" className="feature-section feature-style-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-8">
            <div className="section-title text-center mb-60">
              <h3 className="mb-15 wow fadeInUp" data-wow-delay=".2s">Specializing In</h3>
              <p className="wow fadeInUp" data-wow-delay=".4s">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Tarjeta 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
              <div className="icon">
                <i className="lni lni-vector"></i>
                <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF"/>
                </svg>                  
              </div>
              <div className="content">
                <h5>Graphics Design</h5>
                <p>Short description for the ones who look for something new.</p>
              </div>
            </div>
          </div>
          
          {/* Tarjeta 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
              <div className="icon">
                <i className="lni lni-pallet"></i>
                <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF"/>
                </svg> 
              </div>
              <div className="content">
                <h5>Print Design</h5>
                <p>Short description for the ones who look for something new.</p>
              </div>
            </div>
          </div>
          
          {/* Nota: Agrega aquí las demás tarjetas siguiendo la misma estructura */}
        </div>
      </div>
    </section>

    );
}

export default FeaturesSection;
