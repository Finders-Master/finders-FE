import React from 'react';

function ShowGuardianInfo() {
  return (
    <>
      <div>
        <p>Nombre</p>
        <div className="disabled-input">
          <p>{window.localStorage.getItem('user')}</p>
        </div>

        <p>Número de contacto</p>
        <div className="disabled-input">{/* <p>{user.telephone}</p> */}</div>
      </div>
    </>
  );
}

export default ShowGuardianInfo;
