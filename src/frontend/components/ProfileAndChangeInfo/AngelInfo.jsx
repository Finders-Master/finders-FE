import React, { useState, useEffect } from "react";

function AngelInfo() {
  const [angel, setAngel] = useState([]);

  useEffect(() => {
    fetch(`https://thefinders.herokuapp.com/patient/334`)
      .then((response) => response.json())
      .then((data) =>
        // setUser([data.user.address, data.user.contact_emergencies])
        console.log(data)
      )
      .catch((err) => console.error(err));
  });
  return (
    <div className="angel-info login__container">
      <img
        className="angel-info__photo update-angel-photo"
        src="https://img.favpng.com/21/21/3/stock-photography-thought-man-looking-up-png-favpng-e1M7u3YcarHcG7M7fgjeWYLdD.jpg"
        alt="Person"
      />
      <h2 className="angel-info__person-name">Mario Gacía Lopez Perez</h2>
    </div>
  );
}

export default AngelInfo;
