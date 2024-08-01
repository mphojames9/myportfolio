import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a7c5ag9', 'template_5bc1mt5', form.current, {
        publicKey: 'drD2CBWiRuBzQGBEO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container-contact" id="container-contact">
      <h2 className="contactMe_h2">Contact me</h2>
    <form ref={form} onSubmit={sendEmail}>
      <label className="form-label">Name</label>
      <input className="form-control" type="text" name="from_name" required />
      <label className="form-label">Subject</label>
      <input className="form-control" type="text" name="subject_name" required />
      <label className="form-label">Email</label>
      <input className="form-control" type="email" name="user_email" required />
      <label className="form-label">Message</label>
      <textarea className="form-control" name="message" />
      <input className="btn btn-submit" type="submit" value="Send" required />
    </form>
    </div>
  );

}

export default ContactForm;