import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import GoogleLogo from '../../assets/svg/GoogleLogo';
import TwitterLogo from '../../assets/svg/TwitterLogo';
import { login } from '../../utils/index';
import { register, login as loginRoute } from '../../../routes';

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
          to={loginRoute}
          exact
          activeClassName="loginform__buttons__active"
        >
          <button type="submit">Login</button>
        </NavLink>
        <div className="separator__vertical" />
        <NavLink
          className="loginform__buttons__inactive"
          to={register}
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
          <a href="/auth/google-oauth">
            <button type="button">
              <span>
                <GoogleLogo />
              </span>
              Google
            </button>
          </a>

          <a href="/auth/twitter">
            <button type="button">
              <span>
                <TwitterLogo />
              </span>
              Twitter
            </button>
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
