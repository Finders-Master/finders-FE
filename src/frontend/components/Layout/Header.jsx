/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import LogoFindMe from '../../assets/svg/LogoFindMe';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SearchBar from '../SearchBar/SearchBar.jsx';

const Header = () => {
  const [modal, setmodal] = useState(false);
  const [search, setsearch] = useState(false);
  const handleModal = () => {
    setmodal(!modal);
  };
  const handleSearch = () => {
    setsearch(!search);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInput = () => {};
  return (
    <>
      <header className="layout__header">
        <div className="layout__header__brand">
          <button>
            <AiOutlineMenu />
          </button>
          <figure>
            <Link to="/">
              <LogoFindMe />
            </Link>
          </figure>
        </div>
        <div className="layout__header__scan">
          <Button
            style="button alert shadow"
            fontSize="1.1"
            text="ESCANEAR CODIGO QR"
            link="/"
          />
        </div>
        <nav className="layout__header__register">
          <button
            className="layout__header__register__search"
            onClick={() => {
              handleSearch();
            }}
          >
            <CgSearch />
          </button>
          <button
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
            link="/registro"
            fontSize=".7"
          />
        </Modal>
        <SearchBar
          search={search}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
        />
      </header>
    </>
  );
};

export default Header;
