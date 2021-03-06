import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/containers/Portfolio.scss';

const Portfolio = () => {
  const { state } = useContext(AppContext);
  const { portfolio } = state;
  return (
    <div className="portfolio">
      <h2>{portfolio.title}</h2>
      <div className="portfolio__projects">
        {portfolio.projects.map((project) => (
          <Link
            to={{
              pathname: '/project',
              project,
            }}
            key={project.title}
            style={{ textDecoration: 'none' }}
          >
            <article className="portfolio__project">
              <figure>
                <img src={project.images[0]} alt="project" />
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
