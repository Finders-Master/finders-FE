import React, { useState } from 'react';

function FormChangeInfo() {
  const [inputsValues, setInputsValues] = useState({
    name: 'Juan francisco Perez Lopez',
    password: '',
    confirmPassword: '',
    phoneNumber: '+52 5555 5555',
  });

  function handleInput(event) {
    setInputsValues({
      ...inputsValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <label className="component-input" htmlFor="name">
        <p>Nombre</p>
        <input
          required
          id="name"
          value={inputsValues.name}
          className="component-input__input component-input__input--border"
          type="email"
          placeholder="Nombre completo"
          name="name"
          onChange={handleInput}
        />
      </label>

      <label className="component-input" htmlFor="password">
        <p>Contraseña</p>
        <input
          value={inputsValues.password}
          required
          id="password"
          className="component-input__input component-input__input--border"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInput}
        />
      </label>

      <label className="component-input" htmlFor="password">
        <p>Confirma la contraseña</p>
        <input
          value={inputsValues.confirmPassword}
          required
          id="confirm-password"
          className="component-input__input component-input__input--border"
          type="password"
          placeholder="Confirma la contraseña"
          name="confirmPassword"
          onChange={handleInput}
        />
      </label>

      <label className="component-input" htmlFor="password">
        <p>Número de telefono</p>
        <input
          value={inputsValues.phoneNumber}
          required
          id="phone"
          className="component-input__input component-input__input--border"
          type="tel"
          placeholder="Numero de contacto"
          name="phone"
          onChange={handleInput}
        />
      </label>
    </>
  );
}

export default FormChangeInfo;
