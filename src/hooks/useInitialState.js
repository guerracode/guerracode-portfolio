import { useState } from 'react';
import english from '../data/english';
import spanish from '../data/spanish';

const useInitialState = () => {
  const [state, setState] = useState(english);
  const [project, setProject] = useState({});
  let language = true;

  const changeLanguage = () => {
    language = !language;
    // eslint-disable-next-line no-unused-expressions
    language ? setState(english) : setState(spanish);
  };

  return {
    state,
    changeLanguage,
    project,
    setProject,
  };
};

export default useInitialState;
