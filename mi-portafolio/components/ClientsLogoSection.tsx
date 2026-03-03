import react from 'react';

const ClientsLogoSection: React.FC = () => {
    return (
        <section className="clients-logo-section pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="client-logo wow fadeInUp" data-wow-delay=".2s">
              <img src="assets/img/clients/brands.svg" alt="Client Brands" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default ClientsLogoSection;
