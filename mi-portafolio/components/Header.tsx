import React from 'react';

const Header: React.FC = () => {
	return (
      <header className="header header-6">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#home">
                  <img src="assets/img/logo/logo.svg" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent6" aria-controls="navbarSupportedContent6" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon">XD  </span>
                  {/* <span className="toggler-icon">Hola  </span>
                  <span className="toggler-icon">Hola</span> */}
                </button>

                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent6">
                  <ul id="nav6" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="page-scroll active" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#feature">Feature</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
                
                <div className="header-action d-flex">
                  <a href="#0"> <i className="lni lni-cart"></i> </a>
                  <a href="#0"> <i className="lni lni-alarm"></i> </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
};

export default Header;
