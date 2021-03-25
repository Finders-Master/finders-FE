import React, { useState, useEffect } from 'react';
import Sweet from 'sweetalert2';
import Info from './Info';

export default function AngelInfo() {
  const [angelGuardian, setAngelGuardian] = useState([]);
  const token = window.localStorage.getItem('jwt');

  let isLogged;

  if (token !== undefined && token !== null && token.length > 10) {
    isLogged = true;
  } else {
    isLogged = false;
  }

  useEffect(() => {
    if (isLogged) {
      fetch(
        `https://thefinders.herokuapp.com/patient/${window.localStorage.getItem(
          'id'
        )}`
      )
        .then((response) => response.json())
        .then((data) =>
          setAngelGuardian({
            name: data.user.name,
            telephone: data.user.contact_emergencies,
            picture: data.user.pictures,
            blood_type: data.user.health_id[0].blood_type,
            allergies: data.user.health_id[0].allergies,
            medication: data.user.health_id[0].medication,
            institution: data.user.institution,
            address: data.user.address,
          })
        )
        .catch((err) =>
          Sweet.fire({
            icon: 'error',
            title: 'Ocurrió un error, intenta más',
          }).finally(() => {})
        );
    }
  });
  return (
    <>
      {isLogged === true && (
        <main className="angel-info-main">
          <section className="angel-info-main__basic-data--container">
            <div className="angel-info-main__basic-data--person">
              <img
                className="angel-info__photo"
                src={angelGuardian.pictures}
                alt="Persona"
                loading="lazy"
              />
              <h1 className="angel-info__name">{angelGuardian.name}</h1>
            </div>
          </section>
          <section>
            <div className="angel__info">
              <Info
                label="Contacto de emergencia"
                data={angelGuardian.telephone}
              />
              <Info label="Tipo de sangre" data={angelGuardian.blood_type} />
              <Info label="Enfermedades" data={angelGuardian.allergies} />
              <Info label="Alergias" data={angelGuardian.allergies} />
              <Info label="Medicamentos" data={angelGuardian.medication} />
              <Info label="Sistema de salúd" data={angelGuardian.institution} />
              <Info label="Dirección" data={angelGuardian.address} />
              <Info
                label="QRCode"
                data={window.localStorage.getItem('QRCode')}
              />
            </div>
            <div className="person-id">
              <img
                className="person-id__img"
                src="https://cdn.forbes.com.mx/2019/06/INE.jpg"
                alt="Identificación"
                loading="lazy"
              />
            </div>
          </section>
        </main>
      )}
    </>
  );
}
