import React from 'react';
import Profile from '../../components/ChangeInfo/Profile';
import ChangeInfoForm from '../../components/ChangeInfo/ChangeInfoForm';
import ShowAngel from '../../components/ChangeInfo/ShowAngel';

function ChangeInfo() {
  return (
    <>
      <main>
        <Profile />
        <ChangeInfoForm />
        <h2>Angeles</h2>
        <button className="loginform__submit button-change-info" type="button">
          Añadir ángel
        </button>
        <ShowAngel />
      </main>
    </>
  );
}

export default ChangeInfo;
