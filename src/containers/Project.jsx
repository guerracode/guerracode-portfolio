import React from 'react';
import Carousel from '../components/Carousel';

import '../styles/containers/Project.scss';
import Github from '../assets/icons/Github.svg';
import Web from '../assets/icons/Web.svg';

const Project = ({ location }) => {
  const { project } = location;
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <p className="project__position">{project.position}</p>
      <h4 className="project__description">{project.description}</h4>
      <div className="project__images">
        <Carousel images={project.images} />
      </div>
      <div className="project__links">
        <div className="project__tec">
          <h3>{project.techTitle}</h3>
          <p>{project.technologies}</p>
        </div>
        <div className="project__icons">
          <div className="project__icons--icon">
            <a href={project.code.url}>
              <Github className="icon" />
              <p>{project.code.text}</p>
            </a>
          </div>
          <div className="project__icons--icon">
            <a href={project.page.url}>
              <Web className="icon" />
              <p>{project.page.text}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
