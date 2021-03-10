import React from 'react';
import Camera from '../../components/Scan/Camera';

function Scan() {
  return (
    <>
      <div
        style={{
          width: '90vw',
          display: 'grid',
          justifyContent: 'center',
          marginTop: '17vh',
        }}
      >
        <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>
          Centre el código QR
        </h1>
        <Camera />
      </div>
    </>
  );
}

export default Scan;
