import React, { useContext } from 'react';
import parse from 'html-react-parser';
import AppContext from '../context/AppContext';

import '../styles/containers/About.scss';
import Me from '../assets/images/Me.png';

const About = () => {
  const { state } = useContext(AppContext);
  const { about } = state;
  return (
    <div className="about">
      <h2>{about.title}</h2>
      <img src={Me} alt="about me" />
      <p>{parse(about.description)}</p>
    </div>
  );
};

export default About;
