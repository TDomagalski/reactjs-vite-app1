import React from 'react';

export default function PageAccount() {
  return (
    <>
      <h1>Register Account</h1>
      <div className="form_container">
        <form className="form_register">
          <input className="form_field" placeholder="Nick" name="nick" />
          <input className="form_field" placeholder="email" name="email" />
          <button className="form_field" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
