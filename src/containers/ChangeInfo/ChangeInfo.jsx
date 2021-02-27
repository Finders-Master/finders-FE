import React, { useState } from 'react';
import Profile from '../../components/ChangeInfo/Profile';
import ChangeInfoForm from '../../components/ChangeInfo/ChangeInfoForm';
import ShowAngel from '../../components/ChangeInfo/ShowAngel';
import AddAngel from '../../components/ChangeInfo/AddAngel';

function ChangeInfo() {
  const [createNewAngel, setCreateNewAngel] = useState(false);

  function showCreateNewAngelForm() {
    setCreateNewAngel(!createNewAngel);
  }

  return (
    <>
      <main className="change-info-page">
        <Profile />
        <ChangeInfoForm />
        <h2>Angeles</h2>
        {!createNewAngel && (
          <button
            onClick={showCreateNewAngelForm}
            className="loginform__submit button-change-info"
            type="button"
          >
            Añadir ángel
          </button>
        )}
        {createNewAngel && (
          <>
            <AddAngel />
            <button
              onClick={showCreateNewAngelForm}
              className="loginform__submit button-change-info"
              type="button"
            >
              Crear nuevo ángel
            </button>
            <button
              onClick={showCreateNewAngelForm}
              className="loginform__submit button-change-info cancel-button"
              type="button"
            >
              Cancelar creación de nuevo ángel
            </button>
          </>
        )}
        <ShowAngel />
      </main>
    </>
  );
}

export default ChangeInfo;
