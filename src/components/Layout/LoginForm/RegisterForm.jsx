import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoogleLogo } from '../../../assets/svg/GoogleLogo';
import { TwitterLogo } from '../../../assets/svg/TwitterLogo';

export default function RegisterForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className='loginform' onSubmit={handleSubmit}>
      <div className='loginform__buttons'>
        <NavLink
          className='loginform__buttons__inactive'
          to='/login'
          exact
          activeClassName='loginform__buttons__active'
        >
          <button>Login</button>
        </NavLink>
        <div className='separator__vertical'></div>
        <NavLink
          className='loginform__buttons__inactive'
          to='/registro'
          exact
          activeClassName='loginform__buttons__active'
        >
          <button>Registro</button>
        </NavLink>
      </div>

      <div className='loginform__inputs'>
        <input type='text' placeholder='Nombre completo' />
        <input type='password' placeholder='Contraseña' />
        <input type='password' placeholder='Confirmar contraseña' />
        <input type='email' placeholder='Correo' />
      </div>

      <input type='submit' className='loginform__submit' />
      <div className='loginform__social'>
        <h3>O entra con tus redes sociales</h3>
        <div className='loginform__social__buttons'>
          <button type='submit'>
            <span>
              <GoogleLogo />
            </span>
            google
          </button>
          <button type='submit'>
            <span>
              <TwitterLogo />
            </span>
            twitter
          </button>
        </div>
      </div>
    </form>
  );
}
