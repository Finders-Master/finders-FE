import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import GoogleLogo from '../../assets/svg/GoogleLogo';
import TwitterLogo from '../../assets/svg/TwitterLogo';
// import { useForm } from '../../Hooks/useForm';
import { login } from '../../utils/index';

const LoginForm = () => {
  const EmailInput = useRef(null);
  const PasswordInput = useRef(null);

  //  Logic

  function handleSubmit(event) {
    event.preventDefault();
    login(EmailInput.current.value, PasswordInput.current.value)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((data) => {
        console.log(data);
      });
  }

  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <div className="loginform__buttons">
        <NavLink
          className="loginform__buttons__inactive"
          to="/login"
          exact
          activeClassName="loginform__buttons__active"
        >
          <button type="submit">Login</button>
        </NavLink>
        <div className="separator__vertical" />
        <NavLink
          className="loginform__buttons__inactive"
          to="/registro"
          exact
          activeClassName="loginform__buttons__active"
        >
          <button type="submit">Registro</button>
        </NavLink>
      </div>

      {/* Inputs */}

      <div className="loginform__inputs">
        <input
          ref={EmailInput}
          name="email"
          type="email"
          placeholder="Correo"
        />
        <input
          ref={PasswordInput}
          name="password"
          type="password"
          placeholder="Contraseña"
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="loginform__submit"
      >
        Iniciar sesión
      </button>
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
};
export default LoginForm;
