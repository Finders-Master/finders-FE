import React, { useState, useEffect } from 'react';

function AngelInfo() {
  const [angel, setAngel] = useState([]);
  const [isRequested, setIsRequested] = useState(false);

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append(
      'Authorization',
      `Bearer ${window.localStorage.getItem('jwt')}`
    );
    console.log(window.localStorage.getItem('id'));

    fetch(
      `https://thefinders.herokuapp.com/user/${window.localStorage.getItem(
        'id'
      )}`,
      {
        headers,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setAngel({
          nameAngel: data.user.userguard_id.name,
          picture: data.user.userguard_id.pictures,
        });
        setIsRequested(true);
      })
      .catch((err) => {
        setIsRequested(true);
      });
  }, [isRequested]);

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
