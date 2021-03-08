import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <ul className="footer--list">
      <li>
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/finders%2FHome%20icon.png?alt=media&token=c40167f6-7e82-43c9-8a3d-41f688eb4c36"
            alt="Home icon"
          />
        </Link>
      </li>
      <li>
        <Link to="/scan">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/finders%2FSearch%20icon.png?alt=media&token=1a88c2f3-e8c2-49a8-b09c-bc097ae6c284"
            alt="Escanear código QR"
          />
        </Link>
      </li>
      <li>
        <Link to="/notificaciones">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/finders%2FNotification%20icon.png?alt=media&token=44ded482-d518-4611-b4a3-1d296ad8d84a"
            alt="Notificaciones"
          />
        </Link>
      </li>
      <li>
        <Link to="perfil">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/finders%2FAccount%20icon.png?alt=media&token=ce4cf284-e57d-4ef5-ba8e-d0070b5d4c1b"
            alt="Perfil"
          />
        </Link>
      </li>
    </ul>
  </footer>
);
export default Footer;
