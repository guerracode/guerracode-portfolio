import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import SocialIcons from '../components/SocialIcons';
import '../styles/containers/Home.scss';

const Home = () => {
  const { state } = useContext(AppContext);
  const { home } = state;
  return (
    <div className="home">
      <h3>{`${home.greeting},`}</h3>
      <h1>{home.name}</h1>
      <h3>{home.position}</h3>
      <p>{home.dev}</p>
      <SocialIcons />
    </div>
  );
};

export default Home;
