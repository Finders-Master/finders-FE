import React, { useState } from 'react';

function AddAngel() {
  const [inputsValues, setInputsValues] = useState({
    bloodType: 'O +',
    diseases: 'Alzhaimer',
    alergies: 'None',
    medications: 'Paracetamol',
    healtcareSystem: 'IMSS',
    adress: 'Alta vista 16 interior 8',
  });

  function handleInputs(event) {
    setInputsValues({
      ...inputsValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <div>
        <form method="post">
          <label htmlFor="bloodType">
            <p className="change-angel-label--white">Tipo de sangre</p>
            <select
              className="component-input__input component-input__input--border"
              required
              name="bloodType"
              onChange={handleInputs}
              id="bloodType"
            >
              <option value={inputsValues.bloodType} defaultValue>
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
              name="diseases"
              id="diseases"
              onChange={handleInputs}
            />
          </label>

          <label htmlFor="alergies">
            <p className="change-angel-label--white">Alergias</p>
            <input
              value={inputsValues.alergies}
              className="component-input__input component-input__input--border"
              required
              type="text"
              name="alergies"
              id="alergies"
              onChange={handleInputs}
            />
          </label>

          <label htmlFor="medications">
            <p className="change-angel-label--white">Medicamentos</p>
            <input
              value={inputsValues.medications}
              className="component-input__input component-input__input--border"
              required
              type="text"
              name="medications"
              id="medications"
              onChange={handleInputs}
            />
          </label>
          <label htmlFor="healtcareSystem">
            <p className="change-angel-label--white">Sistema de salud</p>
            <input
              value={inputsValues.healtcareSystem}
              className="component-input__input component-input__input--border"
              required
              type="text"
              name="healtcareSystem"
              id="healtcareSystem"
              onChange={handleInputs}
            />
          </label>
          <label htmlFor="adress">
            <p className="change-angel-label--white">Dirección</p>
            <input
              value={inputsValues.adress}
              className="component-input__input component-input__input--border"
              required
              type="text"
              name="adress"
              id="adress"
              onChange={handleInputs}
            />
          </label>
        </form>
      </div>
    </>
  );
}

export default AddAngel;
