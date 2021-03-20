import React, { useLayoutEffect, useState } from "react";
import Sweet from "sweetalert2";

function Camera() {
  const [photoTaked, setPhotoTaked] = useState(false);
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
          let streaming = false;
          const video = document.querySelector("#video");
          const canvas = document.querySelector("#canva");
          const photo = document.querySelector("#photo");
          const startbutton = document.querySelector("#takePhoto");
          const width = 320;
          let height = 0;

          navigator.getMedia =
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;

          navigator.getMedia(
            {
              video: true,
              audio: false,
            },
            (stream) => {
              if (navigator.mozGetUserMedia) {
                video.mozSrcObject = stream;
              } else {
                video.srcObject = stream;
              }
              video.play();
            },
            (err) => {
              Sweet.fire({
                icon: "warning",
                text: err,
              });
            }
          );

          video.addEventListener(
            "canplay",
            () => {
              if (!streaming) {
                height = video.videoHeight / (video.videoWidth / width);
                video.setAttribute("width", width);
                video.setAttribute("height", height);
                canvas.setAttribute("width", width);
                canvas.setAttribute("height", height);
                streaming = true;
              }
            },
            false
          );

          function takepicture() {
            canvas.width = width;
            canvas.height = height;
            canvas.getContext("2d").drawImage(video, 0, 0, width, height);
            const data = canvas.toDataURL("image/png");
            photo.setAttribute("src", data);
            setPhotoTaked(true);
          }

          startbutton.addEventListener(
            "click",
            (ev) => {
              ev.preventDefault();
              takepicture();
            },
            false
          );
        },
        () => {
          // Error getting permisions
          Sweet.fire({
            title: "Ocurrió un error",
            icon: "error",
            confirmButtonText:
              '<a style="color: white;" target="blank" href="https://support.google.com/chrome/answer/2693767?co=GENIE.Platform%3DDesktop&hl=es-419">¿Cómo cambiar los permisos?</a>',
            allowOutsideClick: false,
            html: `<p>Si no has habilitado los permisos es necesatio para usar la cámara</p>
            <a href="/">Regresar al inicio</a>`,
          });
        }
      );
    }
  }

  useLayoutEffect(() => {
    Sweet.fire({
      title: "Permisos requeridos",
      text:
        "Necesitamos tu permiso para acceder a la cámara para escanear el códigoQR",
      icon: "info",
      confirmButtonText: "Entendido",
    }).finally(() => {
      useCamera();
    });
  }, []);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video id="video" />

      <button
        className="button loginform__submit button-change-info"
        type="button"
        id="takePhoto"
      >
        {photoTaked ? "Tomar la foto de nuevo" : "Escanear QR"}
      </button>
      <canvas id="canva" />
      <img hidden id="photo" src="" alt="" />
    </>
  );
}

export default Camera;
