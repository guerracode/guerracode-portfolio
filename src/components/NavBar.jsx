import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/components/NavBar.scss';
import HomeIcon from '../assets/icons/Home.svg';
import AboutIcon from '../assets/icons/About.svg';
import SkillsIcon from '../assets/icons/Skills.svg';
import PortfolioIcon from '../assets/icons/Portfolio.svg';
import ContactIcon from '../assets/icons/Contact.svg';
import BackIcon from '../assets/icons/Back.svg';

const NavBar = () => {
  const { changeLanguage } = useContext(AppContext);
  const [language, setLanguage] = useState('ENG');
  const location = useLocation();

  const clickLanguage = () => {
    const lang = changeLanguage();
    setLanguage(lang ? 'ENG' : 'ESP');
  };

  return (
    <nav className="navBar">
      {location.pathname === '/project' ? (
        <Link to="/portfolio">
          <BackIcon className="navBar__backIcon" />
        </Link>
      ) : (
        <>
          <ul>
            <li>
              <Link to="/">
                <HomeIcon
                  className="navBar__icon"
                  fill={location.pathname === '/' ? '#86C232' : '#476424'}
                />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <AboutIcon
                  className="navBar__icon"
                  fill={location.pathname === '/about' ? '#86C232' : '#476424'}
                />
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <SkillsIcon
                  className="navBar__icon"
                  fill={location.pathname === '/skills' ? '#86C232' : '#476424'}
                />
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <PortfolioIcon
                  className="navBar__icon"
                  fill={
                    location.pathname === '/portfolio' ? '#86C232' : '#476424'
                  }
                />
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <ContactIcon
                  className="navBar__icon"
                  fill={
                    location.pathname === '/contact' ? '#86C232' : '#476424'
                  }
                />
              </Link>
            </li>
          </ul>
          <button
            className="changeLanguage"
            type="button"
            onClick={clickLanguage}
          >
            {language}
          </button>
        </>
      )}
    </nav>
  );
};

export default NavBar;
