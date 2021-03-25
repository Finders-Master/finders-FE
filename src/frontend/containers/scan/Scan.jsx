import React from 'react';
import Camera from '../../components/Scan/Camera';

function Scan() {
  return (
    <>
      <div className="scan-page__container">
        <h1 className="scan-page__container--title">Centre el código QR</h1>
        <Camera />
      </div>
    </>
  );
}

export default Scan;
