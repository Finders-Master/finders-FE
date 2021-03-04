import React from 'react';

// Get coordinates:
/* navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
});

*/
function Map() {
  return (
    <>
      <div className="location__container">
        <h3 className="location__container--title">Fue escaneado en:</h3>
        <canvas
          className="map"
          width="300px"
          height="300px"
          style={{ backgroundColor: 'black' }}
        />
      </div>
      <hr className="location__container--line" />
    </>
  );
}

export default Map;
