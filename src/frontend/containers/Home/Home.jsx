import React from 'react';
import Banner from '../../components/banner/Banner';
import Iphone from '../../assets/static/iphone.png';
import GivingCard from '../../assets/static/card.png';
import ScaningIstrucction from '../../assets/static/icon-scan.png';
import HandMobile from '../../assets/static/icon-hand-withmobile.png';
import IconCard from '../../assets/static/icon-card.png';
import IconLocation from '../../assets/static/icon-location.png';
import IconHearth from '../../assets/static/hearth.png';

const Home = () => (
  <>
    <Banner />
    <section className="Home">
      <article className="Home__description">
        <img
          src={Iphone}
          alt="telefono movil con la pantalla escaneando un codigo qr FindMe"
          className="animate__animated animate__fadeInUp animate__delay-1s"
        />
        <div className="Home__description__text">
          <h2>
            <span>FINDME, </span>
            es una aplicación diseñada para atender una urgencia en personas con
            enfermedades degenerativas como aizhaimer entre otras enfermedades
          </h2>
          <img
            src={GivingCard}
            alt="dando a un adulto mayor una tarjeta FindMe"
            className="animate__animated animate__fadeInRight animate__delay-1s"
          />
        </div>
      </article>
      <article className="Home__instrucctions">
        <div className="Home__instrucctions__container">
          <div>
            <h3>¿COMO FUNCIONA?</h3>
            <h4>
              Si encuentras a alguien con complicaciones seguramente esta
              inscrito en FINDME
            </h4>
          </div>
          <div className="Home__instrucctions__container__icons">
            <div>
              <img
                src={ScaningIstrucction}
                alt="instrucciones icono de pantalla escaneando un qr"
              />
              <p>Localiza la tarjeta con el codigo QR</p>
            </div>
            <div>
              <img
                src={HandMobile}
                alt="instrucciones icono de pantalla escaneando un qr"
              />
              <p>Escanealo con la camara de tu celular o aquí</p>
            </div>
            <div>
              <img
                src={IconCard}
                alt="instrucciones icono de pantalla escaneando un qr"
              />
              <p>
                serás enviado a una página con los datos personales de la
                persona asi como indicacones para su auxilio
              </p>
            </div>
            <div>
              <img
                src={IconLocation}
                alt="instrucciones icono de pantalla escaneando un qr"
              />
              <p>
                La aplicación mandara la ubicación de la persona a su guardian
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="Home__helpus">
        <div className="Home__helpus__container">
          <img
            src={IconHearth}
            alt="icono de un corazon pixeleado, parte del logo de findme"
            className="animate__animated animate__heartBeat animate__infinite"
          />
          <h2>AYUDANOS A SALVAR VIDAS</h2>
          <h4>
            RESGISTRATE COMO GUARDIAN Y DA DE ALTA A UN CONOCIDO O FAMILIAR
            TUYO, UN DÍA PUEDE NECESITAR TU AYUDA Y SABRAS DONDE ENCONTRARLO
          </h4>
        </div>
      </article>
    </section>

    <h3 style={{ color: 'lightgray' }}>FINDME® 2021 ALL RIGHTS RESERVED</h3>
  </>
);
export default Home;
