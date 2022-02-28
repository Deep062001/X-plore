import React, { useState, useEffect } from 'react';
import HomePage from './Pages/HomePage/HomePage';
import MainPage from './Pages/MainPage/MainPage';
import { HAS_USER_LOGGED } from './localStorageKeys';
import './App.scss';
import context from './Context';


const App = () => {
  const [hasUserLoggedBefore,setHasUserLoggedBefore]=useState({
    showMainPage: false,
    isLight: true
  })
  useEffect(() => {
    const hasUserLogged = JSON.parse(localStorage.getItem(HAS_USER_LOGGED));
    if (hasUserLogged)
    { 
      setHasUserLoggedBefore(hasUserLogged);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(HAS_USER_LOGGED, JSON.stringify(hasUserLoggedBefore));
  }, [hasUserLoggedBefore]);

  

  function changeTheme(){
    setHasUserLoggedBefore(prev=>{
      return {
        ...prev, 
        isLight: !prev.isLight
      }
    })
  }

  return <context.Provider value={hasUserLoggedBefore.isLight}>
    <div>
      {hasUserLoggedBefore.showMainPage && <MainPage changeTheme={changeTheme}/>}
      {!hasUserLoggedBefore.showMainPage && <HomePage showMainPage={()=>{
        setHasUserLoggedBefore(prev=>{
          return {
            ...prev, 
            showMainPage: true
          }
        })
      }}/>}
    </div>
  </context.Provider>;
};

export default App;
