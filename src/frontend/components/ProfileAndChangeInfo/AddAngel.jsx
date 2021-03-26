import React, { useState } from 'react';
import QRCode from 'qrcode';
import AddPatient from '../../utils/addAngel';
import LoadingSpinner from '../common/LoadingSpinner';
import 'regenerator-runtime';

function AddAngel() {
  const [inputsValues, setInputsValues] = useState({
    name: '',
    blood_type: '',
    diseases: '',
    allergies: '',
    medication: '',
    institution: '',
    address: '',
    contact_emergencies: '',
    id_document: '',
  });

  const [angelCreationResponse, setAngelCreationRespone] = useState(undefined);

  const [qrUrl, setQrUrl] = useState('');

  function handleClick(e) {
    e.preventDefault();

    const request = {
      qr: '',
      ...inputsValues,
    };

    // Update component to show an await response component
    setAngelCreationRespone('await');

    AddPatient(request)
      .then((res) => res.json())
      .then((data) => {
        const infoToQr = {
          name: data.patient.name,
          address: data.patient.address,
          id_document: data.patient.id_document,
          institution: data.patient.institution,
          allergies: data.patient.health_id[0].allergies,
          diseases: data.patient.health_id[0].diseases,
          medication: data.patient.health_id[0].medication,
          blood_type: data.patient.health_id[0].blood_type,
          pictures: data.patient.pictures,
        };

        const segs = [
          {
            data: Object.values(infoToQr).toLocaleString(),
            mode: 'byte',
          },
        ];

        let qrImg;

        QRCode.toDataURL(segs, (err, url) => {
          if (err) console.log(err);
          qrImg = url;
        });

        setQrUrl(qrImg);

        setAngelCreationRespone(data);
      });
  }

  function handleInputs(event) {
    setInputsValues({
      ...inputsValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      {/* Formulary */}
      {angelCreationResponse === undefined && (
        <>
          <div>
            <form method="POST">
              <label htmlFor="name">
                <p className="change-angel-label--white">Nombre</p>
                <input
                  value={inputsValues.name}
                  className="component-input__input component-input__input--border"
                  required
                  placeholder="Nombre completo"
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleInputs}
                />
              </label>

              <label htmlFor="blood_type">
                <p className="change-angel-label--white">Tipo de sangre</p>
                <select
                  className="component-input__input component-input__input--border"
                  required
                  name="blood_type"
                  onChange={handleInputs}
                  id="blood_type"
                >
                  <option value={inputsValues.blood_type} defaultValue>
                    Selecciona el tipo de sangre
                  </option>

                  <option value="O +">O +</option>
                  <option value="O -">O -</option>
                  <option value="A +">A +</option>
                  <option value="A -">A -</option>
                  <option value="B +">B +</option>
                  <option value="B -">B -</option>
                  <option value="AB +">AB +</option>
                  <option value="AB -">AB -</option>
                </select>
              </label>

              <label htmlFor="diseases">
                <p className="change-angel-label--white">Discapacidades</p>
                <input
                  value={inputsValues.diseases}
                  className="component-input__input component-input__input--border"
                  required
                  type="text"
                  placeholder="Cada discapacidad separada con un punto"
                  name="diseases"
                  id="diseases"
                  onChange={handleInputs}
                />
              </label>

              <label htmlFor="allergies">
                <p className="change-angel-label--white">Alergias</p>
                <input
                  value={inputsValues.allergies}
                  className="component-input__input component-input__input--border"
                  required
                  type="text"
                  placeholder="Cada alergia separada con un punto"
                  name="allergies"
                  id="allergies"
                  onChange={handleInputs}
                />
              </label>

              <label htmlFor="medication">
                <p className="change-angel-label--white">Medicamentos</p>
                <input
                  value={inputsValues.medication}
                  className="component-input__input component-input__input--border"
                  required
                  type="text"
                  placeholder="Cada medicamento separado con un punto"
                  name="medication"
                  id="medication"
                  onChange={handleInputs}
                />
              </label>
              <label htmlFor="institution">
                <p className="change-angel-label--white">Sistema de salud</p>
                <input
                  value={inputsValues.institution}
                  className="component-input__input component-input__input--border"
                  required
                  type="text"
                  name="institution"
                  id="institution"
                  placeholder="IMSS, ISSTE"
                  onChange={handleInputs}
                />
              </label>
              <label htmlFor="address">
                <p className="change-angel-label--white">Dirección</p>
                <input
                  value={inputsValues.address}
                  className="component-input__input component-input__input--border"
                  required
                  type="text"
                  name="address"
                  id="address"
                  onChange={handleInputs}
                />
              </label>
              <label htmlFor="phone">
                <p className="change-angel-label--white">
                  Número de emergencias
                </p>
                <input
                  type="tel"
                  value={inputsValues.contact_emergencies}
                  className="component-input__input component-input__input--border"
                  required
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  name="contact_emergencies"
                  id="phone"
                  onChange={handleInputs}
                />
              </label>
              <label htmlFor="id_document">
                <p className="change-angel-label--white">
                  CURP, Documento o número de identificación
                </p>
                <input
                  type="text"
                  value={inputsValues.id_document}
                  className="component-input__input component-input__input--border"
                  required
                  name="id_document"
                  id="id_document"
                  onChange={handleInputs}
                />
              </label>
            </form>
          </div>
          <button
            onClick={handleClick}
            className="loginform__submit button-change-info"
            type="button"
          >
            Crear nuevo ángel
          </button>
        </>
      )}

      {/* Request sended */}
      {angelCreationResponse === 'await' && <LoadingSpinner />}

      {/* Response */}
      {typeof angelCreationResponse === 'object' &&
        angelCreationResponse.patient === undefined && (
          <h1 className="request-response-error-fatal request-response">
            Ocurrió un error, intente más tarde
          </h1>
        )}

      {typeof angelCreationResponse === 'object' &&
        Object.values(angelCreationResponse.patient).length > 0 && (
          <h1 className="request-response-succcess request-response">
            Paciente creado correctamente
          </h1>
        )}

      {qrUrl.length > 0 && <img src={qrUrl} alt="Código QR" />}
    </>
  );
}

export default AddAngel;
