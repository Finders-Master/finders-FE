import React, { useState } from "react";

function ChangeAngelInfo() {
  const [inputsValues, setInputsValues] = useState({
    bloodType: "B +",
    diseases: "Alzhaimer",
    alergies: "None",
    medications: "Paracetamol",
    healtcareSystem: "IMSS",
    adress: "Alta vista 16 interior 8",
  });

  function handleInputs(event) {
    setInputsValues({
      ...inputsValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <form method="post">
        <label className="component-input" htmlFor="bloodType">
          <p className="change-angel-label">Tipo de sangre</p>
          <select
            className="component-input__input component-input__input--border change-angel-info"
            required
            name="bloodType"
            onChange={handleInputs}
            id="bloodType"
          >
            <option value={inputsValues.bloodType} defaultValue>
              {inputsValues.bloodType.length > 0
                ? inputsValues.bloodType
                : "Selecciona el tipo de sangre"}
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

        <label className="component-input" htmlFor="diseases">
          <p className="change-angel-label">Discapacidades</p>
          <input
            value={inputsValues.diseases}
            className="component-input__input component-input__input--border change-angel-info"
            required
            type="text"
            name="diseases"
            id="diseases"
            onChange={handleInputs}
          />
        </label>

        <label className="component-input" htmlFor="alergies">
          <p className="change-angel-label">Alergias</p>
          <input
            value={inputsValues.alergies}
            className="component-input__input component-input__input--border change-angel-info"
            required
            type="text"
            name="alergies"
            id="alergies"
            onChange={handleInputs}
          />
        </label>

        <label className="component-input" htmlFor="medications">
          <p className="change-angel-label">Medicamentos</p>
          <input
            value={inputsValues.medications}
            className="component-input__input component-input__input--border change-angel-info"
            required
            type="text"
            name="medications"
            id="medications"
            onChange={handleInputs}
          />
        </label>
        <label className="component-input" htmlFor="healtcareSystem">
          <p className="change-angel-label">Sistema de salud</p>
          <input
            value={inputsValues.healtcareSystem}
            className="component-input__input component-input__input--border change-angel-info"
            required
            type="text"
            name="healtcareSystem"
            id="healtcareSystem"
            onChange={handleInputs}
          />
        </label>
        <label className="component-input" htmlFor="adress">
          <p className="change-angel-label">Dirección</p>
          <input
            value={inputsValues.adress}
            className="component-input__input component-input__input--border change-angel-info"
            required
            type="text"
            name="adress"
            id="adress"
            onChange={handleInputs}
          />
        </label>
      </form>
    </div>
  );
}

export default ChangeAngelInfo;
