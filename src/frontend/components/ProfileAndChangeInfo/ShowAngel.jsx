import React, { useState } from 'react';
import AngelInfo from './AngelInfo';
import ChangeAngelInfo from './ChangeAngelInfo';

function ShowAngel() {
  const [changeInfoOfAngel, setChangeInfoOfAngel] = useState(false);

  function toggleChangeInfoOfAngel() {
    setChangeInfoOfAngel(!changeInfoOfAngel);
  }

  return (
    <>
      <section className="loginform update-angel">
        <AngelInfo />

        {changeInfoOfAngel && <ChangeAngelInfo />}

        {/* If user are changing angel info, hidde button. Redirect coming soon */}
        {!changeInfoOfAngel && (
          <button
            className="loginform__submit button-change-info"
            type="button"
          >
            Encontrar
          </button>
        )}

        <button
          onClick={toggleChangeInfoOfAngel}
          className="loginform__submit button-change-info"
          type="button"
        >
          {!changeInfoOfAngel ? 'Actualizar información' : 'Guardar cambios'}
        </button>

        {/* Cancel edition */}
        {changeInfoOfAngel && (
          <button
            className="loginform__submit button-change-info cancel-button"
            onClick={toggleChangeInfoOfAngel}
            type="button"
          >
            Cancelar edición
          </button>
        )}
      </section>
    </>
  );
}

export default ShowAngel;
