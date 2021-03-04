import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <section className="layout">
    <Header>aqui va el header</Header>
    <section className="layout__container">
      { children }
    </section>
    <Footer>aqui va el footer</Footer>
  </section>
);
export default Layout;
