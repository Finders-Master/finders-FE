import React from 'react';

function GuardianProfile() {
  return (
    <>
      <div className="profile-component">
        <img
          className="angel-info__photo"
          src={window.localStorage.getItem('img')}
          alt="Person"
        />
        <h1 className="angel-info__name">Información personal</h1>
      </div>
    </>
  );
}

export default GuardianProfile;
