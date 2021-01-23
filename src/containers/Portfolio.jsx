import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/containers/Portfolio.scss';
import ProjectImage from '../assets/images/proyect.png';

const Portfolio = () => {
  const { state } = useContext(AppContext);
  const { portfolio } = state;
  return (
    <div className="portfolio">
      <h2>{portfolio.title}</h2>
      <div className="portfolio__projects">
        {portfolio.projects.map((project) => (
          <Link to="/project">
            <article className="portfolio__project">
              <figure>
                <img src={ProjectImage} alt="project" />
              </figure>
              <h4>{project.title}</h4>
              <p>{project.position}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
