/* eslint-disable no-console */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8hry8z9',
        'template_sponu37',
        form.current,
        '98sETYRZzmCGjcN_s'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form_container">
      <form className="form_contact" ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">
          Name
          <input className="form_field" type="text" name="user_name" />
        </label>
        <label htmlFor="user_email">
          Email
          <input className="form_field" type="email" name="user_email" />
        </label>
        <label htmlFor="message">
          Message
          <textarea className="form_field" name="message" />
        </label>
        <input className="form_field-btn" type="submit" value="Send" />
      </form>
    </div>
  );
}
