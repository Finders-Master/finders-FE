import React, { useState, useEffect } from "react";
import Info from "./Info";

export default function AngelInfo() {
  const [angelGuardian, setAngelGuardian] = useState([]);

  useEffect(() => {
    fetch(`https://thefinders.herokuapp.com/patient/334`)
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
      .catch((err) => console.error(err));
  });
  return (
    <>
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
            <Info label="QRCode" data={window.localStorage.getItem("QRCode")} />
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
    </>
  );
}
