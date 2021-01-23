import React from 'react';
import Carousel from '../components/Carousel';

import '../styles/containers/Project.scss';
import Github from '../assets/icons/Github.svg';
import Web from '../assets/icons/Web.svg';

const Project = () => (
  <div className="project">
    <h2>Event 5</h2>
    <p className="project__position">FullStack Developer</p>
    <h4 className="project__description">
      Event 5 es una pagina para crear y manejar eventos de forma sencilla.
    </h4>
    <div className="project__images">
      <Carousel />
    </div>
    <div className="project__links">
      <div className="project__tec">
        <h3>Technologies</h3>
        <p>
          JavaScript, React, Html, Css, Sass, Node, Express, Sendgrid,
          PostgreSQL, Azure, Heroku.
        </p>
      </div>
      <div className="project__icons">
        <div className="project__icons--icon">
          <a href="/">
            <Github className="icon" />
            <p>Code</p>
          </a>
        </div>
        <div className="project__icons--icon">
          <a href="/">
            <Web className="icon" />
            <p>Page</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
