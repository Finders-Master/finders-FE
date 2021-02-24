import React from 'react';

export default function Info({ label, data }) {
  return (
    <div tabIndex="0" className="info__container">
      <h2 className="info__container--label">{label}</h2>
      <p className="info__container--data">{data}</p>
      <hr className="info__container--line" />
    </div>
  );
}
