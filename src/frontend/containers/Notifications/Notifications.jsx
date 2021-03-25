import React from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../../../routes';
// import Alert from '../../components/Notifications/Alert';
// import Map from '../../components/Notifications/Map';
// import Message from '../../components/Notifications/Message';

/* <main className="alert-page">
        <div>
          <Alert />
          <Map />
          <Message message="Se encuentra en el hospital 5 de mayo" />
        </div>
      </main> */

export default function Notifications() {
  const token = window.localStorage.getItem('jwt');

  let isLogged;

  if (token !== undefined && token !== null && token.length > 10) {
    isLogged = true;
  } else {
    isLogged = false;
  }

  return (
    <>
      {isLogged === false && <Redirect to={login} />}

      {isLogged === true && (
        <h1 style={{ marginTop: '30vh', textAlign: 'center' }}>
          Work in progress... Pronto podrás acceder a esta caracteristica 👷‍♀️
        </h1>
      )}
    </>
  );
}
