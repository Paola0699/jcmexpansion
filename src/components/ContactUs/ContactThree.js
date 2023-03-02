import React from "react";
import ContactFormFive from "./ContactFormFive";

const ContactThree = () => (
  <section className="contact-us dark-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <ContactFormFive />
        </div>
        <div className="col-md-4">
          <h3 className="white-color">Dirección</h3>
          <address>
            Eliseo Ramírez Ulloa #103. Colonia Real de Minas. CP. 42090. Pachuca de Soto, Hidalgo, México.
            <br />
            (+52) 771 107 4224
            <br />
            <a href="mailto:jcmexpansion@hotmail.com">jcmexpansion@hotmail.com</a>
          </address>
          <h3 className="white-color">Horarios de Atención</h3>
          <p>
            <span>Lunes - Viernes: 10am a 5pm</span> <br />
            <span>Sábado : 8am a 12pm</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactThree;
