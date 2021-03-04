import React from 'react';

export default function Message({ message }) {
  return (
    <>
      <div>
        <div className="message__container">
          <h3 className="message__container--title">Mensaje del auxiliador</h3>
          <div className="message__content">
            <p className="message__content--message">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}
