import React from 'react';
import Input from '../common/Input';

function Form({ setEmailStatus }) {
  function sendEmailToRecoverPassword(event) {
    event.preventDefault();
    setEmailStatus(true);
  }

  return (
    <>
      <form className="form-reset-password" method="POST">
        <Input
          placeholder="Email"
          inputId="restore-email"
          label="Ingresa tu correo para recuperar tu contraseña"
          type="email"
        />
        <button
          onClick={sendEmailToRecoverPassword}
          type="submit"
          className="loginform__submit toggle-component"
        >
          Recuperar contraseña
        </button>
      </form>
    </>
  );
}

export default Form;
