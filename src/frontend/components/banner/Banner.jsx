import React from 'react';
import Button from '../Button/Button';
import bannerImg from '../../assets/static/main_image.jpg';

const Banner = () => (
  <div
    className="main"
    style={{ background: `url(${bannerImg})`, backgroundSize: 'cover' }}
  >
    <div className="main__container">
      <div className="main__container__space" />
      <div className="main__container__info">
        <h1>
          70% de las causas de muerte por Aizhamer son causadas por una tardia
          atención de emergencia
        </h1>
        <h1>Si alguien necesita ayuda</h1>
        <Button
          style="button alert shadow"
          fontSize="1.1"
          text="ESCANEA UN CODIGO QR"
          link="/"
        />
      </div>
    </div>
    <div className="main__form" />
  </div>
);

export default Banner;
