import React from 'react';
import WarningIcon from '../../assets/svg/WarningIcon';

export default function Alert() {
  return (
    <>
      <div className="alert__container">
        <WarningIcon />
        <h1 className="alert__container--title">ATENCIÓN</h1>
      </div>
      <div className="alert__info">
        <img
          className="angel-info__photo"
          src="https://ahtprinting.com/wp-content/uploads/2019/11/black-person-png-business-professional-man-png.jpg"
          alt="Person"
        />
        <h3 className="alert__info--name">JUAN FRANCISCO GARCÍA LÓPEZ PEREZ</h3>
        <div className="alert__info--warning">
          <h2 className="alert__info--text">NECESITA SU ATENCIÓN URGENTE</h2>
        </div>
      </div>
    </>
  );
}
