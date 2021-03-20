import React, { useLayoutEffect, useRef, useState } from 'react';
import Sweet from 'sweetalert2';

function Camera() {
  const VideoElement = useRef(null);

  // Solicite camera permissions
  function useCamera() {
    if (
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia
    ) {
      navigator.getUserMedia(
        { video: true },
        () => {
          const stream = new MediaStream();

          if (navigator.mozGetUserMedia) {
            VideoElement.current.mozSrcObject = stream;
          } else {
            VideoElement.current.srcObject = stream;
          }
          VideoElement.current.play();
        },
        () => {
          // Error getting permisions
          Sweet.fire({
            title: 'Ocurrió un error',
            icon: 'error',
            text: 'Si no has habilitado los permisos puedes cambiar esto',
            confirmButtonText:
              '<a style="color: white;" target="blank" href="https://support.google.com/chrome/answer/2693767?co=GENIE.Platform%3DDesktop&hl=es-419">¿Cómo cambiar los permisos?</a>',
            allowOutsideClick: false,
            html: '<a href="/">Ir al inicio</a>',
          });
        },
      );
    }
  }

  useLayoutEffect(() => {
    Sweet.fire({
      title: 'Permisos requeridos',
      text:
        'Necesitamos tu permiso para acceder a la cámara para escanear el códigoQR',
      icon: 'info',
      confirmButtonText: 'Entendido',
    }).finally(() => {
      useCamera();
    });
  }, [VideoElement]);

  return (
    <>
      {/* <canvas
        width="300px"
        height="300px"
        className="scan-page__container--camera"
      /> */}
      <video ref={VideoElement} src="" />

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
