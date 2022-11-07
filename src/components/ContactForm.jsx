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
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">
          Name
          <input type="text" name="user_name" />
        </label>
        <label htmlFor="user_email">
          Email
          <input type="email" name="user_email" />
        </label>
        <label htmlFor="message">
          Message
          <textarea name="message" />
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
