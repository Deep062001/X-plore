import React, { useContext, useState } from 'react';
import './SetNewPinModal.scss';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import context from '../../Context';
import { USER_PIN } from '../../localStorageKeys';

// ========================== FINE ==============================
const SetNewPinModal = (props) => {
  const isLight=useContext(context);

  const [passVisible,setPassVisible]=useState(false); 
  const [confirmPassVisible,setConfirmPassVisible]=useState(false);

  const [pins,setPins]=useState({
    newPin:"",
    confirmPin:""
  });

  function handlePinChange(event){
    const {name, value}=event.target;

    setPins((prev)=>{
      return {
        ...prev,
        [name]:value.replace(/[^0-9]/g, '')
      }
    })

  };
  
  function handleSubmit(e){
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
      localStorage.setItem(USER_PIN, JSON.stringify(pins.newPin));
      props.showChangePinFunc();
    }
    e.preventDefault();
    e.stopPropagation();
   
  }

  return (
    <div className={isLight?'new-pin-modal':'new-pin-modal-dt'} onClick={props.showChangePinFunc}>
    <div className='set-pin-modal-div' onClick={(e)=>{e.stopPropagation();}}>
    <h3>Set New Pin </h3>
      <form autocomplete="off">
      <p>Enter New Pin </p>
      <div className='pin-input-div'>
        <input className='pin-input' type={passVisible?'character':'password'} maxLength='4' onChange={handlePinChange} name="newPin" value={pins.newPin} autoComplete="off" autoFocus/>
        {passVisible?<VisibilityOutlinedIcon className='eye-icon'  onClick={()=>{setPassVisible(prev=>!prev)}}/>:<VisibilityOffOutlinedIcon className='eye-icon' onClick={()=>{setPassVisible(prev=>!prev)}}/>}
      </div>
      <br/>
      <p>Confirm New Pin </p>
      <div className='pin-input-div'>
        <input className='pin-input'  type={confirmPassVisible?'character':'password'} maxLength='4' onChange={handlePinChange} name="confirmPin" value={pins.confirmPin} autoComplete="off"/>
        {confirmPassVisible?<VisibilityOutlinedIcon className='eye-icon' onClick={()=>{setConfirmPassVisible(prev=>!prev)}}/>:<VisibilityOffOutlinedIcon className='eye-icon'  onClick={()=>{setConfirmPassVisible(prev=>!prev)}}/>}
      </div>
      <div>
        <button className='modal-submit-btn' onClick={handleSubmit}>Save Changes</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default SetNewPinModal