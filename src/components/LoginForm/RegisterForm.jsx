import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GoogleLogo from '../../assets/svg/GoogleLogo';
import TwitterLogo from '../../assets/svg/TwitterLogo';
//  Utils
import {
  validateInput,
  compareInputs,
  toggle,
  handleInputs as manageInputsValues,
  RegExpEmail,
  RegExpPassword,
} from '../../utils/index';

function RegisterForm() {
  const [inputsValues, setInputsValues] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
  });
  const [inputsErrors, setInputsErrors] = useState({
    email: true,
    password: true,
    passwordsAreSame: true,
  });
  const [disableButton, setDisableButton] = useState(true);

  function validateAllInputs() {
    validateInput(
      'email',
      inputsValues.email,
      RegExpEmail,
      setInputsErrors,
      inputsErrors,
    );
    validateInput(
      'password',
      inputsValues.password,
      RegExpPassword,
      setInputsErrors,
      inputsErrors,
    );

    compareInputs(
      'passwordsAreSame',
      inputsValues.password,
      inputsValues.confirmPassword,
      setInputsErrors,
      inputsErrors,
    );
  }

  function handleInputs(event) {
    manageInputsValues(event, inputsValues, setInputsValues);

    // Toggle disable button
    const { email, password, passwordsAreSame } = inputsErrors;
    toggle(email && password && passwordsAreSame, setDisableButton);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    validateAllInputs();
  }, [inputsValues]);

  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <div className="loginform__buttons">
        <NavLink
          className="loginform__buttons__inactive"
          to="/login"
          exact
          activeClassName="loginform__buttons__active"
        >
          <button type="button">Login</button>
        </NavLink>
        <div className="separator__vertical" />
        <NavLink
          className="loginform__buttons__inactive"
          to="/registro"
          exact
          activeClassName="loginform__buttons__active"
        >
          <button type="button">Registro</button>
        </NavLink>
      </div>

      {/* Inputs */}

      <div className="loginform__inputs">
        <input
          name="name"
          required
          onChange={handleInputs}
          type="text"
          placeholder="Nombre completo"
        />
        <input
          name="password"
          required
          onChange={handleInputs}
          type="password"
          placeholder="Contraseña"
        />

        {/* Password message */}
        {inputsValues.password.length > 0
          ? inputsErrors.password === true && (
              <h3>
                La contaseña debe de incluir mayúsculas, minúsculas, números y
                símbolos
              </h3>
            )
          : null}

        <input
          name="confirmPassword"
          required
          onChange={handleInputs}
          type="password"
          placeholder="Confirmar contraseña"
        />

        {/* Confirm password message */}

        {inputsValues.confirmPassword.length > 0
          ? inputsErrors.passwordsAreSame === true && (
              <h3>Ambas contraseñas deben de coincidir</h3>
            )
          : null}

        <input
          name="email"
          required
          onChange={handleInputs}
          type="email"
          placeholder="Correo"
        />

        {/* Check email format */}
        {inputsValues.email.length > 0
          ? inputsErrors.email === true && <h3>Ingresa un email válido</h3>
          : null}
      </div>

      {/* Login with social media */}

      <input
        style={disableButton ? { backgroundColor: '#cccccc' } : {}}
        disabled={disableButton}
        type="submit"
        className="loginform__submit"
      />
      <div className="loginform__social">
        <h3>O entra con tus redes sociales</h3>
        <div className="loginform__social__buttons">
          <button type="submit">
            <span>
              <GoogleLogo />
            </span>
            Google
          </button>
          <button type="submit">
            <span>
              <TwitterLogo />
            </span>
            Twitter
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
