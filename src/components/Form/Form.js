import React, { useState } from 'react';
import './Form.scss';
import context from '../../Context';;

const Form = (props) => {
  const [pins,setPins]=useState({
    newPin:"",
    confirmPin:""
  });

  function handlePinChange(event){
    const {name, value}=event.target;
    console.log(name);

    setPins((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })

  };

  function handleSubmit(event){
    if(pins.newPin.length!==4 || pins.confirmPin.length!==4){
      alert("Pin Should be of 4 characters");
      setPins({newPin:"",
      confirmPin:""});
    } 
    else if(pins.newPin!==pins.confirmPin){
      alert("Pins are not same");
      setPins({newPin:"",
      confirmPin:""});
    }
    else{
        props.showMainPage();
    }

    event.preventDefault();
  }



  return <div>
    <div className="form-div">
    <div className='text-left-div'>
    <p>Set your account pin</p>
    </div>
      <form className="home-form" onSubmit={handleSubmit}>
          <input onChange={handlePinChange} type="text" maxLength='4' name="newPin" placeholder="Enter new pin" value={pins.newPin}/>
          <input onChange={handlePinChange} type="text" maxLength='4' name="confirmPin" placeholder="Confirm new pin" value={pins.confirmPin}/>
          <button type='Submit'>Save Changes</button>
      </form>
    </div>
  </div>;
};

export default Form;
