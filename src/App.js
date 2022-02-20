import React, { useState } from 'react';
import HomePage from './Pages/HomePage/HomePage';
import MainPage from './Pages/MainPage/MainPage';
import './App.scss';
import context from './Context';


const App = () => {
  const [isLight,setIsLight]=useState(true);

  function changeTheme(){
    setIsLight(prev=>!prev);
  }

  return <context.Provider value={isLight}>
    <div>
      <MainPage changeTheme={changeTheme}/>
      {/* <HomePage/> */}
    </div>
  </context.Provider>;
};

export default App;
