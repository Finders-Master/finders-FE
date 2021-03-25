import React, { useEffect, useState } from "react";

function ShowGuardianInfo() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://thefinders.herokuapp.com/patient/334`)
      .then((response) => response.json())
      .then((data) =>
        setUser({
          name: data.user.name,
          telephone: data.user.contact_emergencies,
        })
      )
      .catch((err) => console.error(err));
  });

  return (
    <>
      <div>
        <p>Nombre</p>
        <div className="disabled-input">
          <p>{user.name}</p>
        </div>

        <p>Número de contacto</p>
        <div className="disabled-input">
          <p>{user.telephone}</p>
        </div>
      </div>
    </>
  );
}

export default ShowGuardianInfo;
