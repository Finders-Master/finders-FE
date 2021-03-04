import React from 'react';

function RecoverMessage({ setEmailStatus }) {
  function handleClick(event) {
    event.preventDefault();
    setEmailStatus(false);
  }
  return (
    <>
      <h2 className="recover-message">
        Hemos enviado un mensaje al email que proporcionaste, esto puede tardar
        unos segundos.
      </h2>
      <p>¿No te llegó el correo?</p>
      <button
        className="loginform__submit toggle-component"
        onClick={handleClick}
        type="submit"
      >
        Enviar nuevamente
      </button>
    </>
  );
}

export default RecoverMessage;
