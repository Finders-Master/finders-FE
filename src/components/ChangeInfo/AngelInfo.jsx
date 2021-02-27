import React from 'react';

function AngelInfo() {
  return (
    <div
      style={{
        display: 'grid',
        alignContent: 'space-around',
        height: '100%',
        marginTop: '0',
      }}
      className="login__container"
    >
      <img
        style={{ marginBottom: '0' }}
        className="angel-info__photo"
        src="https://img.favpng.com/21/21/3/stock-photography-thought-man-looking-up-png-favpng-e1M7u3YcarHcG7M7fgjeWYLdD.jpg"
        alt="Person"
      />
      <h2 style={{ color: 'white' }}>Mario Gacía Lopez Perez</h2>
    </div>
  );
}

export default AngelInfo;
