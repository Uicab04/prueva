// src/components/Contact.js
import React from 'react';

const Contact = () => (
  <section id="contacto" className="section">
    <h2 className="section__title">Contacto</h2>
    <div className="section__content">
      <p className="section__text">Teléfono: +52 9842044835</p>
      <p className="section__text">
        Email: <a href="mailto:victoruicabnahuat@gmail.com" className="section__link">victoruicabnahuat@gmail.com</a>
      </p>
      <p className="section__text">
        GitHub: <a href="https://github.com/Uicab04" target="_blank" rel="noopener noreferrer" className="section__link">Uicab04</a>
      </p>
    </div>
  </section>
);

export default Contact;