/* eslint-disable react/button-has-type */
import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleLogo from '../../assets/svg/GoogleLogo';
import TwitterLogo from '../../assets/svg/TwitterLogo';
import { useForm } from '../../Hooks/useForm';

const RegisterForm = () => {
  
  const [{name, }, handleInputChange, reset ] = useForm()
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="loginform"
      onSubmit={handleSubmit}
    >
      <div className="loginform__buttons">
        <NavLink
          className="loginform__buttons__inactive"
          to="/login"
          exact
          activeClassName="loginform__buttons__active"
        >
          <button>login</button>
        </NavLink>
        <div className="separator__vertical" />
        <NavLink
          className="loginform__buttons__inactive"
          to="/registro"
          exact
          activeClassName="loginform__buttons__active"
        >
          <button>Registro</button>
        </NavLink>
      </div>

      <div className="loginform__inputs">
        <input
          name="name"
          value={name}
          type="text"
          placeholder="nombre completo"
          onChange={handleInputChange}
        />
        <input
          
          type="password"
          placeholder="contraseña"
        />
        <input
          type="password"
          placeholder="confirmar contraseña"
        />
        <input
          type="email"
          placeholder="correo"
        />
      </div>

      <input type="submit" className="loginform__submit" />
      <div className="loginform__social">
        <h3>o entra con tus redes sociales</h3>
        <div className="loginform__social__buttons">
          <button>
            <span>
              <GoogleLogo />
            </span>
            google
          </button>
          <button>
            <span>
              <TwitterLogo />
            </span>
            twitter
          </button>
        </div>
      </div>
    </form>
  );
};
export default RegisterForm;
