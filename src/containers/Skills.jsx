import React from 'react';
import skillsImages from '../data/skillsImages';

import '../styles/containers/Skills.scss';

const weatherIcon = require.context('../assets/images/skills', true, /.png$/);

const Skills = () => (
  <div className="skills">
    <h2>SKILLS</h2>
    <div className="skills__images">
      {skillsImages.map((image) => (
        <img
          src={weatherIcon(`./${image}.png`).default}
          alt="about me"
          key={image}
        />
      ))}
    </div>
  </div>
);

export default Skills;
