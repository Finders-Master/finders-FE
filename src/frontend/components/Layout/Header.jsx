import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { register } from '../../../routes';

const Header = () => {
  const [modal, setmodal] = useState(false);
  const handleModal = () => {
    setmodal(!modal);
  };

  return (
    <>
      <header className="layout__header">
        <div className="layout__header__brand">
          <button type="button">
            <AiOutlineMenu />
          </button>
          <figure>
            <Link to="/">
              <img
                className="logo"
                loading="lazy"
                src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/finders%2Flogo-finders.png?alt=media&token=0f47758d-17a4-4999-bbbd-b8a309750467"
                alt="Logo de Finders"
              />
            </Link>
          </figure>
        </div>
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
