import React from 'react';
import Footer from './Footer';
import Header from './Header';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <section className="layout">
    <Header />
    <section className="layout__container">{children}</section>
    <Footer />
  </section>
);

export default Layout;
