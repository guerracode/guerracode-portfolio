import React from 'react';

import '../styles/containers/About.scss';
import Me from '../assets/images/Me.png';

const About = () => (
  <div className="about">
    <h2>ABOUT ME</h2>
    <img src={Me} alt="about me" />
    <p>
      Desarrollador de software especializado en JavaScript, apasionado por
      crear experiencias increíbles.
      <br />
      <br />
      Una persona 100% autodidacta que ama los desafíos y aprender cosas nuevas.
      <br />
      <br />
      I’m looking to collaborate with other people and working on ambitious
      projects with positive persons.
    </p>
  </div>
);

export default About;
