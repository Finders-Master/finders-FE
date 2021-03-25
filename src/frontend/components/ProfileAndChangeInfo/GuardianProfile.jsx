import React, { useState, useEffect } from "react";

function GuardianProfile() {
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    fetch(`https://thefinders.herokuapp.com/patient/334`)
      .then((response) => response.json())
      .then((data) => setUserImage(data.user.pictures))
      .catch((err) => console.error(err));
  });
  return (
    <>
      <div className="profile-component">
        <img className="angel-info__photo" src={userImage} alt="Person" />
        <h1 className="angel-info__name">Información personal</h1>
      </div>
    </>
  );
}

export default GuardianProfile;
