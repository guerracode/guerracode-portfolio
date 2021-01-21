import React from 'react';
import NavBar from './NavBar';
import '../styles/components/Layout.css';

const Layout = ({ children }) => (
  <div className="Main">
    <NavBar />
    {children}
  </div>
);

export default Layout;
