import React from 'react';
import Info from './Info';

export default function AngelInfo() {
  const token = window.localStorage.getItem('jwt');

  let isLogged;

  if (token !== undefined && token !== null && token.length > 10) {
    isLogged = true;
  } else {
    isLogged = false;
  }

  const angelInfo = window.sessionStorage.getItem('qr-scanned').split(',');

  return (
    <>
      {isLogged === true && (
        <main className="angel-info-main">
          <section className="angel-info-main__basic-data--container">
            <div className="angel-info-main__basic-data--person">
              <img
                className="angel-info__photo"
                src={angelInfo[8]}
                alt="Persona"
                loading="lazy"
              />
              <h1 className="angel-info__name">{angelInfo[0]}</h1>
            </div>
          </section>
          <section>
            <div className="angel__info">
              <Info label="Contacto de emergencia" data="+55 5555 55555" />
              <Info label="Tipo de sangre" data={angelInfo[7]} />
              <Info label="Enfermedades" data={angelInfo[5]} />
              <Info label="Alergias" data={angelInfo[4]} />
              <Info label="Medicamentos" data={angelInfo[6]} />
              <Info label="Sistema de salúd" data={angelInfo[3]} />
              <Info label="Dirección" data={angelInfo[1]} />
              <Info label="ID" data={angelInfo[2]} />
            </div>
          </section>
        </main>
      )}
    </>
  );
}
