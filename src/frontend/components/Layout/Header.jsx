import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import LogoFindMe from '../../assets/svg/LogoFindMe';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { register } from '../../../routes';

const Header = () => {
  const [modal, setmodal] = useState(false);
  const handleModal = () => {
    setmodal(!modal);
  };
  const location = useLocation();

  return (
    <>
      <header className="layout__header">
        <div className="layout__header__brand">
          <button type="button">
            <AiOutlineMenu />
          </button>
          <figure>
            <Link to="/">
              <LogoFindMe />
            </Link>
          </figure>
        </div>
        {location.pathname === '/' && (
          <div className="layout__header__scan">
            <Button
              style="button alert shadow"
              fontSize="1.1"
              text="ESCANEAR CODIGO QR"
              link="/"
            />
          </div>
        )}
        <nav className="layout__header__register">
          <button
            type="button"
            className="layout__header__register__user"
            onClick={() => {
              handleModal();
            }}
          >
            <AiOutlineUser />
          </button>
        </nav>
        <Modal modal={modal} position="modaluser" handleModal={handleModal}>
          <Link to="/login">INICIAR SESIÓN</Link>
          <Button
            style="button primary"
            text="REGISTRATE COMO GUARDIAN"
            link={register}
            fontSize=".7"
          />
        </Modal>
      </header>
    </>
  );
};

export default Header;
