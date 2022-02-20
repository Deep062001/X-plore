import React from 'react';
import HomeFilePic from '../../assets/HomeFilePic';
import './LeftHomeDiv.scss';
import context from '../../Context';

const LeftHomeDiv = () => {
  return <div>
      <div className="text-left-div-welcome">
      <h1>Welcome to your <br/>Dashboard</h1>
      <p>This is the homepage of your <br/>file explorer, set your pin and start</p>
      </div>

      <HomeFilePic/>
      
  </div>;
};

export default LeftHomeDiv;
