import React from 'react';

function ShowGuardianInfo() {
  return (
    <>
      <div>
        <p>Nombre</p>
        <div className="disabled-input">
          <p>Luis Garcia Gomez Vallejos</p>
        </div>
        <p>Contraseña</p>
        <div className="disabled-input">
          <p>********</p>
        </div>
        <p>Número de contacto</p>
        <div className="disabled-input">
          <p>+52 5555-555-555</p>
        </div>
      </div>
    </>
  );
}

export default ShowGuardianInfo;
