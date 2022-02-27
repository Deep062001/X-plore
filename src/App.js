import React, { useState, useEffect } from 'react';
import HomePage from './Pages/HomePage/HomePage';
import MainPage from './Pages/MainPage/MainPage';
import { HAS_USER_LOGGED, USER_PIN } from './localStorageKeys';
import './App.scss';
import context from './Context';


const App = () => {
  const [isLight,setIsLight]=useState(true);
  const [showMainPage,setShowMainPage]=useState(false);
  useEffect(() => {
    const hasUserLogged = JSON.parse(localStorage.getItem(HAS_USER_LOGGED));
    if (hasUserLogged)
     {  setShowMainPage(hasUserLogged); }
  }, []);

  useEffect(() => {
    localStorage.setItem(HAS_USER_LOGGED, JSON.stringify(showMainPage));
  }, [showMainPage]);

  function changeTheme(){
    setIsLight(prev=>!prev);
  }

  return <context.Provider value={isLight}>
    <div>
      {showMainPage && <MainPage changeTheme={changeTheme}/>}
      {!showMainPage && <HomePage showMainPage={()=>{
        setShowMainPage(true);
      }}/>}
    </div>
  </context.Provider>;
};

export default App;
