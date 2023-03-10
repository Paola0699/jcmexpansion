import React, { useState } from "react";

const ContactForm = ({ title, tagline }) => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <>
      {title && (
        <h2
          className="text-uppercase font-700 cardo-font"
        >
          {title}
        </h2>
      )}
      {tagline && (
        <h4
          className="text-uppercase"
        >
          - {tagline} -
        </h4>
      )}
      <form
        name="contact-form"
        id="contact-form"
        action="php/contact.php"
        method="POST"
        className="mt-50"
      >
        <div className="messages"></div>
        <div
          className="form-floating"
        >
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            required="required"
            placeholder="Your Name"
            data-error="Your Name is Required"
            value={inputs.name}
            onChange={handleInputChange}
          />
          <label htmlFor="name">Nombre</label>
          <div className="help-block with-errors mt-20"></div>
        </div>
        <div
          className="form-floating"
        >
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            required="required"
            data-error="Please Enter Valid Email"
            value={inputs.email}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Correo electrónico</label>
          <div className="help-block with-errors mt-20"></div>
        </div>
        <div
          className="form-floating"
        >
          <textarea
            name="message"
            className="form-control"
            id="message"
            rows="7"
            placeholder="Your Message"
            required
            data-error="Please, Leave us a message"
            value={inputs.message}
            onChange={handleInputChange}
          ></textarea>
          <label htmlFor="message">Mensaje</label>
          <div className="help-block with-errors mt-20"></div>
        </div>
        <button
          type="submit"
          name="submit"
          className="btn btn-color btn-circle"
        >
          Enviar Mensaje
        </button>
      </form>
    </>
  );
};

export default ContactForm;
