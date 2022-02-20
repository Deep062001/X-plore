import React, { useContext, useEffect, useRef, useState } from 'react'
import './PinModal.scss';
import context from '../../Context';

const PinModal = (props) => {
  const isLight=useContext(context);
  const [pinArr,setPinArr]=useState({
    "0": "",
    "1": "",
    "2": "",
    "3": ""
  });


  const pin0= useRef();
  useEffect(()=>{
    pin0.current.focus();
  },[]);

  function handleChange(event){
    const newId=event.target.id;
    if(newId!=="3"){
      const no=(parseInt(newId)+1)%4;
      const Idnew=no.toString();
      document.getElementById(Idnew).focus();
      //console.log(Idnew);
    }
  }


  // onClick={props.showPinModalFunc}
  return (
    <div className={isLight?'pin-modal':'pin-modal-dt'}>
    <div className='modal-div'>
    <h3>Enter Account Pin</h3>
    <form autoComplete="off">
    <div className='pin-input-div'>
       <input className='pin-input' type='character' maxLength='1' size='1' id='0' onChange={handleChange} ref={pin0} />
       <input className='pin-input' type='character' maxLength='1' size='1' id='1' onChange={handleChange} />
       <input className='pin-input' type='character' maxLength='1' size='1' id='2' onChange={handleChange} />
       <input className='pin-input' type='character' maxLength='1' size='1' id='3' onChange={handleChange} />
    </div>
    <div>
       <button className='modal-submit-btn'>Enter</button>
    </div>
    </form>
    </div>
    </div>
  )
}

export default PinModal