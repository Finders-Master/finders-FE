import React, { useState } from 'react';
import GuardianProfile from '../../components/ProfileAndChangeInfo/GuardianProfile';
import ChangeGuardianForm from '../../components/ProfileAndChangeInfo/ChangeInfoForm';
import ShowAngel from '../../components/ProfileAndChangeInfo/ShowAngel';
import AddAngel from '../../components/ProfileAndChangeInfo/AddAngel';

function ChangeInfo() {
  const [createNewAngel, setCreateNewAngel] = useState(false);

  function showCreateNewAngelForm() {
    setCreateNewAngel(!createNewAngel);
  }

  return (
    <>
      <main className="change-info-page">
        <GuardianProfile />
        <ChangeGuardianForm />
        <h2>Angeles</h2>

        <ShowAngel />

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
              className="loginform__submit button-change-info cancel-button"
              type="button"
            >
              Cancelar creación de nuevo ángel
            </button>
          </>
        )}
      </main>
    </>
  );
}

export default ChangeInfo;
