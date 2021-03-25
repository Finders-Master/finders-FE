import React, { useState, useEffect } from "react";

function AngelInfo() {
  const [angel, setAngel] = useState([]);

  useEffect(() => {
    fetch(`https://thefinders.herokuapp.com/patient/334`)
      .then((response) => response.json())
      .then((data) =>
        setAngel({
          nameAngel: data.user.userguard_id.name,
          picture: data.user.userguard_id.pictures,
        })
      )
      .catch((err) => console.error(err));
  });
  return (
    <div className="angel-info login__container">
      <img
        className="angel-info__photo update-angel-photo"
        src={angel.picture}
        alt="Person"
      />
      <h2 className="angel-info__person-name">{angel.nameAngel}</h2>
    </div>
  );
}

export default AngelInfo;
