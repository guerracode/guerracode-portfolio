import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import skillsImages from '../data/skillsImages';

import '../styles/containers/Skills.scss';

const skillIcon = require.context('../assets/images/skills', true, /.png$/);

const Skills = () => {
  const { state } = useContext(AppContext);
  const { skills } = state;
  return (
    <div className="skills">
      <h2>{skills.title}</h2>
      <div className="skills__images">
        {skillsImages.map((image) => (
          <img
            src={skillIcon(`./${image}.png`).default}
            alt="about me"
            key={image}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
