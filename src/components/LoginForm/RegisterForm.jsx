import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GoogleLogo from '../../assets/svg/GoogleLogo';
import TwitterLogo from '../../assets/svg/TwitterLogo';
//  Utils
import {
  validateInput,
  compareInputs,
  compareLength,
  handleInputs as manageInputsValues,
  RegExpEmail,
  RegExpPassword,
  registerGuardian,
} from '../../utils/index';

function RegisterForm() {
  // States
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

  const [requestMessage, setRequestMessage] = useState({});

  //  Logic

  function handleInputs(event) {
    manageInputsValues(event, inputsValues, setInputsValues);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { email, name, password } = inputsValues;
    registerGuardian(name, email, password).then((response) => {
      setRequestMessage(response);
    });
  }

  function PrintRequestMessage() {
    const { statusCode, message } = requestMessage;
    let requestClassName;
    let fullMessage;
    switch (statusCode) {
      case statusCode >= 100 <= 199:
        requestClassName = 'request-response-info';
        fullMessage = `Info: ${message}`;
        break;
      case statusCode >= 200 <= 299:
        requestClassName = 'request-response-succcess';
        fullMessage = `Éxito: ${message}`;
        break;
      case statusCode >= 300 <= 399:
        requestClassName = 'request-response-info';
        fullMessage = `Info: ${message}`;
        break;
      default:
        requestClassName = 'request-response-error';
        fullMessage = `Error: ${message}`;
        break;
    }

    return (
      <>
        <h1 className={`${requestClassName} request-response`}>
          {fullMessage}
        </h1>
      </>
    );
  }

  //  Inputs validations onChange

  useEffect(() => {
    validateInput(
      'email',
      inputsValues.email,
      RegExpEmail,
      setInputsErrors,
      inputsErrors,
    );
  }, [inputsValues.email]);

  useEffect(() => {
    validateInput(
      'password',
      inputsValues.password,
      RegExpPassword,
      setInputsErrors,
      inputsErrors,
    );
  }, [inputsValues.password]);

  useEffect(() => {
    compareInputs(
      'passwordsAreSame',
      inputsValues.password,
      inputsValues.confirmPassword,
      setInputsErrors,
      inputsErrors,
    );
  }, [inputsValues.password, inputsValues.confirmPassword]);

  useEffect(() => {
    //  Toggle disable button

    const { email, password, passwordsAreSame } = inputsErrors;
    const emailLength = compareLength(inputsValues.email, '>', 0);
    const passwordLength = compareLength(inputsValues.password, '>', 0);
    const confirmPasswordLength = compareLength(
      inputsValues.confirmPassword,
      '>',
      0,
    );
    const nameLength = compareLength(inputsValues.name, '>', 6);
    //  Chack lengths
    if (emailLength && passwordLength && confirmPasswordLength && nameLength) {
      //  Check errors
      if (email === false && password === false && passwordsAreSame === false) {
        setDisableButton(false);
      } else {
        setDisableButton(true);
      }
    } else {
      setDisableButton(true);
    }
  }, [inputsErrors]);

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
              <h3 className="form-alert">
                La contaseña debe de incluir mayúsculas, minúsculas, números,
                símbolos especiales tener minimo 6 caracteres.
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
              <h3 className="form-alert">
                Ambas contraseñas deben de coincidir
              </h3>
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
          ? inputsErrors.email === true && (
              <h3 className="form-alert">Ingresa un email válido</h3>
            )
          : null}
      </div>

      {/* Login with social media */}

      <input
        style={disableButton ? { backgroundColor: '#cccccc' } : {}}
        disabled={disableButton}
        type="submit"
        className="loginform__submit"
      />

      {/* Request message */}

      {Object.keys(requestMessage).length > 0 && <PrintRequestMessage />}

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
