import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import '../styles/containers/Contact.scss';
import SocialIcons from '../components/SocialIcons';

import Email from '../assets/icons/Email.png';
import Phone from '../assets/icons/Phone.png';

const Contact = () => {
  const { state } = useContext(AppContext);
  const { contact } = state;
  return (
    <div className="contact">
      <h2>{contact.title}</h2>
      <div className="contact__info">
        <img src={Email} alt="email" />
        <h3>contact@guerracode.com</h3>
      </div>
      <div className="contact__info">
        <img src={Phone} alt="phone" />
        <h3>(+52) 3328391231</h3>
      </div>
      <SocialIcons />
    </div>
  );
};

export default Contact;
