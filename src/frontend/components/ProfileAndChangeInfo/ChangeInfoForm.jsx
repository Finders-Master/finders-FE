import React, { useState } from 'react';
import FormChangeGuardianInfo from './FormChangeGuardianInfo';
import ShowGuardianInfo from './ShowGuardianInfo';

function ChangeGuardianForm() {
  const [changeInfo, setChangeInfo] = useState(false);

  function toggleChangeInfo(event) {
    event.preventDefault();
    setChangeInfo(!changeInfo);
  }
  function updateInfo(event) {
    event.preventDefault();
    setChangeInfo(false);
  }

  return (
    <>
      {/* Show form or show info */}

      {changeInfo ? <FormChangeGuardianInfo /> : <ShowGuardianInfo />}

      {/* Enable change info button */}
      {changeInfo ? (
        <button
          className="loginform__submit button-change-info"
          onClick={updateInfo}
          type="submit"
        >
          Guardar cambios
        </button>
      ) : (
        <button
          className="loginform__submit button-change-info"
          onClick={toggleChangeInfo}
          type="submit"
        >
          Actualizar información personal
        </button>
      )}

      {/* Button to cancel change info */}
      {changeInfo ? (
        <button
          className="loginform__submit button-change-info cancel-button"
          onClick={toggleChangeInfo}
          type="submit"
        >
          Cancelar actualizar información
        </button>
      ) : null}
    </>
  );
}

export default ChangeGuardianForm;
