import React, { useRef, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import GoogleLogo from '../../assets/svg/GoogleLogo';
import TwitterLogo from '../../assets/svg/TwitterLogo';
import { login, decodeJWT } from '../../utils/index';
import { register, login as loginRoute, profile } from '../../../routes';
import LoadingSpinner from '../common/LoadingSpinner';

const LoginForm = () => {
  const EmailInput = useRef(null);
  const PasswordInput = useRef(null);
  const [errorLogin, setErrorLogin] = useState(false);

  //  Logic

  function handleSubmit(event) {
    event.preventDefault();
    setErrorLogin('await');

    login(EmailInput.current.value, PasswordInput.current.value)
      .catch(() => {
        setErrorLogin(true);
      })
      .then((res) => res.json())
      .catch(() => {
        setErrorLogin(true);
      })
      .then((data) => {
        if (data.access_token === undefined) {
          setErrorLogin(true);
        }

        const tokenDecoded = decodeJWT(data.access_token);
        window.localStorage.setItem('user', tokenDecoded.user);
        window.localStorage.setItem('img', tokenDecoded.image);
        setErrorLogin('redirect');
      });
  }

  return (
    <>
      {errorLogin === false && (
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
      )}

      {errorLogin === 'await' && <LoadingSpinner />}

      {errorLogin === true && (
        <>
          <h1 className="request-response-error-fatal request-response">
            Login error: Inténtalo de nuevo más tarde
          </h1>
        </>
      )}

      {errorLogin === 'redirect' && <Redirect to={profile} />}
    </>
  );
};

export default LoginForm;
