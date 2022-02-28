import React, { useContext, useEffect, useRef, useState } from 'react'
import './PinModal.scss';
import context from '../../Context';
import { USER_PIN } from '../../localStorageKeys';

const PinModal = (props) => {
  const isLight=useContext(context);
  const [pinArr,setPinArr]=useState({
    zero: "",
    one: "",
    two: "",
    three: ""
  });

  const [pinCorrect, setPinCorrect]=useState(0);
  // 0= not checked,  1- correct, 2-- wrong


  const pin0= useRef();
  useEffect(()=>{
    pin0.current.focus();
  },[]);

  function handleChange(event){
    const newId=event.target.id;
    const {name,value}=event.target;
    const val=value.replace(/[^0-9]/g, '');
    setPinArr(prev=>{
      return {
        ...prev,
        [name]: val
      }
    })
    if(val.length>0){
      if(newId!=="3"){
        const no=(parseInt(newId)+1)%4;
        const Idnew=no.toString();
        document.getElementById(Idnew).focus();
        //console.log(Idnew);
      }
    }
  }

  function handleBackspace(e){
    const key=e.keyCode;
    const value=e.target.value;
    const newId=e.target.id;
    if(key===8 && value.length===0 && newId!=="0"){
      const no=(parseInt(newId)-1+4)%4;
      const Idnew=no.toString();
      document.getElementById(Idnew).focus();
    } 
  }

  function handleSubmit(e){
    const userPin = JSON.parse(localStorage.getItem(USER_PIN));
    
    if(pinArr.zero===userPin[0] && pinArr.one===userPin[1] && pinArr.two===userPin[2] && pinArr.three===userPin[3]){   
      setPinCorrect(1);
      setTimeout(() => { 
        setPinCorrect(0);
        props.showPinModalFunc();
       }, 700);
    }
    else{
      setPinCorrect(2);
      setTimeout(() => { 
        setPinCorrect(0);
        setPinArr({
          zero: "",
          one: "",
          two: "",
          three: ""
        });
        pin0.current.focus();
       }, 700);

    }

    e.preventDefault();
  }


  // onClick={props.showPinModalFunc}
  return (
    <div className={isLight?'pin-modal':'pin-modal-dt'}>
    <div className='modal-div'>
    <h3>{pinCorrect===0?'Enter Account Pin':pinCorrect===1?'Correct Pin':'Wrong Pin'}</h3>
    <form autoComplete="off" onSubmit={handleSubmit}>
    <div className='pin-input-div'>
       <input className={pinCorrect===0?'pin-input':pinCorrect===1?'pin-input-correct':'pin-input-wrong'} type='character' maxLength='1' size='1' id='0' onChange={handleChange} ref={pin0} name="zero" value={pinArr.zero} onKeyDown={handleBackspace}/>
       <input className={pinCorrect===0?'pin-input':pinCorrect===1?'pin-input-correct':'pin-input-wrong'} type='character' maxLength='1' size='1' id='1' onChange={handleChange} name="one" value={pinArr.one} onKeyDown={handleBackspace}/>
       <input className={pinCorrect===0?'pin-input':pinCorrect===1?'pin-input-correct':'pin-input-wrong'} type='character' maxLength='1' size='1' id='2' onChange={handleChange} name="two" value={pinArr.two} onKeyDown={handleBackspace}/>
       <input className={pinCorrect===0?'pin-input':pinCorrect===1?'pin-input-correct':'pin-input-wrong'} type='character' maxLength='1' size='1' id='3' onChange={handleChange} name="three" value={pinArr.three} onKeyDown={handleBackspace}/>
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