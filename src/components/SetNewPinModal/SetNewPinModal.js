import React, { useState } from 'react';
import './SetNewPinModal.scss';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


const SetNewPinModal = () => {
    const [passVisisble,setPassVisible]=useState(false);
    const [confirmPassVisisble,setConfirmPassVisible]=useState(false);


  return (
    <div className='modal'>
    <div className='set-pin-modal-div'>
    <h3>Set Pin </h3>
      <form>
      <p>Enter New Pin </p>
      <div className='pin-input-div'>
        <input className='pin-input' type='character'/>
        {passVisisble?<VisibilityOutlinedIcon className='eye-icon'/>:<VisibilityOffOutlinedIcon className='eye-icon'/>}
      </div>
      <br/>
      <p>Confirm New Pin </p>
      <div className='pin-input-div'>
        <input className='pin-input' type='character'/>
        {confirmPassVisisble?<VisibilityOutlinedIcon className='eye-icon'/>:<VisibilityOffOutlinedIcon className='eye-icon'/>}
      </div>
      <div>
        <button className='modal-submit-btn'>Save Changes</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default SetNewPinModal