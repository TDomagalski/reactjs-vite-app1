import React from 'react';

export default function PageAccount() {
  return (
    <>
      <h1>Register Account</h1>
      <div className="form_container">
        <form className="form_register">
          <input
            className="form_field"
            placeholder="First Name"
            name="firstName"
          />
          <input
            className="form_field"
            placeholder="Last Name"
            name="lastName"
          />
          <input className="form_field" placeholder="Email" name="email" />
          <button className="form_field" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
