import React from 'react';

import '../styles/containers/Home.scss';
import Github from '../assets/icons/Github.svg';
import Linkedin from '../assets/icons/Linkedin.svg';
import Twitter from '../assets/icons/Twitter.svg';
import Instagram from '../assets/icons/Instagram.svg';

const Home = () => (
  <div className="home">
    <h3>Hi,</h3>
    <h1>I&#39;m Jose Luis Guerra</h1>
    <h3>A Full Stack Developer</h3>
    <p>Frontend with React / Backend with Node</p>
    <div className="home__icons">
      <a href="https://github.com/guerracode" target="_blank" rel="noreferrer">
        <Github className="home__icons--icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/jose-luis-chavez/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin className="home__icons--icon" />
      </a>
      <a href="https://twitter.com/guerracode" target="_blank" rel="noreferrer">
        <Twitter className="home__icons--icon" />
      </a>
      <a
        href="https://www.instagram.com/guerracode_/?hl=es-la"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram className="home__icons--icon" />
      </a>
    </div>
  </div>
);

export default Home;
