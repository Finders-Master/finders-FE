import React, { useState } from 'react';
import Form from '../../components/Restart/Form';
import RecoverMessage from '../../components/Restart/RecoverMessage';

function Restart() {
  const [emailSended, setEmailSended] = useState(false);

  return (
    <>
      <main className="recover-page">
        <h1 className="recover-page__title">Recuperar contraseña</h1>
        {emailSended ? (
          <RecoverMessage setEmailStatus={setEmailSended} />
        ) : (
          <Form setEmailStatus={setEmailSended} />
        )}
      </main>
    </>
  );
}

export default Restart;
