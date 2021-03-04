import React from 'react';
import Alert from '../../components/Notifications/Alert';
import Map from '../../components/Notifications/Map';
import Message from '../../components/Notifications/Message';

export default function Notifications() {
  return (
    <>
      <main className="alert-page">
        <div>
          <Alert />
          <Map />
          <Message message="Se encuentra en el hospital 5 de mayo" />
        </div>
      </main>
    </>
  );
}
