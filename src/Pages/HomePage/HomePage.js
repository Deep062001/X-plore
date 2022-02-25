import React, { useContext } from 'react';
import Navbar from "../../components/Navbar/Navbar"; 
import LeftHomeDiv from "../../components/LeftHomeDiv/LeftHomeDiv";
import Form from "../../components/Form/Form";
import './HomePage.scss'
//import context from '../../Context';

const HomePage = () => {
//  const isLight=useContext(context);
  return <div>
    <Navbar/>
      <div className="container">
        <div className="wrapper-grid">
            <div className="col">
                <LeftHomeDiv/>
            </div>
            <div className="col">
                <Form/>
            </div>
        </div>
      </div>
  </div>;
};

export default HomePage;
