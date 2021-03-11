import React from 'react';

function Camera() {
  return (
    <>
      <canvas
        width="300px"
        height="300px"
        className="scan-page__container--camera"
      />
      <button
        className="button loginform__submit button-change-info"
        type="button"
      >
        Escanear QR
      </button>
    </>
  );
}

export default Camera;
