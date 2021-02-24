import React from 'react';
import Info from './Info';

export default function AngelInfo() {
  return (
    <>
      <main className="angel-info-main">
        <section className="angel-info-main__basic-data--container">
          <div className="angel-info-main__basic-data--person">
            <img
              className="angel-info__photo"
              src="https://ahtprinting.com/wp-content/uploads/2019/11/black-person-png-business-professional-man-png.jpg"
              alt="Persona"
              loading="lazy"
            />
            <h1 className="angel-info__name">Francisco García Lopez Perez</h1>
          </div>
        </section>
        <section>
          <div className="angel__info">
            <Info label="Contacto de emergencia" data="+55 5555-5555-55" />
            <Info label="Tipo de sangre" data="O +" />
            <Info label="Enfermedades" data="Alzheimer" />
            <Info label="Alergias" data="Ninguna alergia" />
            <Info label="Medicamentos" data="Paracetamol" />
            <Info label="Sistema de salúd" data="IMSS" />
            <Info
              label="Dirección"
              data="Cristóbal Colón #45, Guanajuato Mexico"
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
    </>
  );
}
