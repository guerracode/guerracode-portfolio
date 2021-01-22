import React from 'react';
import NavBar from './NavBar';
import '../styles/components/Layout.scss';

const Layout = ({ children }) => (
  <div className="Main">
    <NavBar />
    <div className="Main__content">{children}</div>
  </div>
);

export default Layout;
