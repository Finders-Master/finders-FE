import React, { useState } from 'react';
import App from './App';
import { AppContext } from './Context/AppContext';

const Main = () => {
  const [mymodal, setmymodal] = useState(false);
  return (
    <AppContext.Provider
      value={{
        mymodal,
        setmymodal,
      }}
    >
      <App />
    </AppContext.Provider>
  );
};

export default Main;
