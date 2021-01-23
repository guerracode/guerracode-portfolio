import React from 'react';

import '../styles/components/SocialIcons.scss';
import Github from '../assets/icons/Github.svg';
import Linkedin from '../assets/icons/Linkedin.svg';
import Twitter from '../assets/icons/Twitter.svg';
import Instagram from '../assets/icons/Instagram.svg';

const SocialIcons = () => (
  <div className="icons">
    <a href="https://github.com/guerracode" target="_blank" rel="noreferrer">
      <Github className="icons--icon" />
    </a>
    <a
      href="https://www.linkedin.com/in/jose-luis-chavez/"
      target="_blank"
      rel="noreferrer"
    >
      <Linkedin className="icons--icon" />
    </a>
    <a href="https://twitter.com/guerracode" target="_blank" rel="noreferrer">
      <Twitter className="icons--icon" />
    </a>
    <a
      href="https://www.instagram.com/guerracode_/?hl=es-la"
      target="_blank"
      rel="noreferrer"
    >
      <Instagram className="icons--icon" />
    </a>
  </div>
);

export default SocialIcons;
