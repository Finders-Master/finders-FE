import React, { useState, useRef } from "react";
import QrReader from "react-qr-reader";
import { Redirect } from "react-router-dom";
import { angel } from "../../../routes";

function Camera() {
  const [reactQR, setReactQR] = useState(false);
  const refReactQR = useRef(null);

  const handleScanFile = (result) => {
    // console.log(result);
    if (result) {
      setReactQR(result);
      window.localStorage.setItem("QRCode", result);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <>
      {!reactQR && (
        <div>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScanFile}
            style={{ width: "100%" }}
            ref={refReactQR}
          />
        </div>
      )}
      {reactQR && <Redirect to={angel} />}
    </>
  );
}

export default Camera;
