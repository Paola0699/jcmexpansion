import React from "react";
import logoFooter from "../../assets/images/logo-footer.png";
import FooterCopyright from "./FooterCopyright";

const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/`}>
                    <img
                      className="logo logo-display"
                      src={logoFooter}
                      alt=""
                    />
                  </a>
                </div>
                <p>
                JCMExpansion es una firma de contadores que ofrece servicios contables, 
                fiscales y de consultoría empresarial de calidad a empresas y particulares. 
                Con valores clave como la integridad y la excelencia, se esfuerza por brindar soluciones 
                financieras personalizadas y confiables para sus clientes.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
            </div>
            <div className="col-sm-6 col-md-2">
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Contáctanos</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href={process.env.PUBLIC_URL}>
                      Eliseo Ramírez Ulloa #103. Colonia Real de Minas. CP. 42090. Pachuca de Soto, Hidalgo, México. 
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="tel:771 107 4224">+771 107 4224</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="mailto:jcmexpansion@hotmail.com">
                      jcmexpansion@hotmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "463px" }}></div>
  </>
);

export default FooterOne;
