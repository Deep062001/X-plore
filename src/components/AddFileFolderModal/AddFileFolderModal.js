import React, { useContext, useState } from 'react';
import './AddFileFolderModal.scss';
import context from '../../Context';

// ================= FINE ===========================
const AddFileFolderModal = (props) => {
  const isLight=useContext(context);
  const [elementName,setElementName]=useState("");

  function handleChange(event){
    const val=event.target.value;
    setElementName(val);
  }

  function makeElement(e){
    const isFolder=props.element==="Folder";
    props.showAddFileFolderModalFunc();
    props.makeElement(isFolder, elementName);
    e.preventDefault();
  }

  return (
    <div className={isLight?'add-modal':'add-modal-dt'} onClick={props.showAddFileFolderModalFunc}>
    <div className='folder-file-modal-div' onClick={(e)=>{e.stopPropagation()}}>
    <h3>Create {props.element}</h3>
      <form>
      <p>Enter {props.element} name: </p>
      <input className='name-input' type='character' onChange={handleChange} value={elementName} autoFocus/>
      <div>
        <button className='modal-submit-btn' onClick={makeElement}>Create Now</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default AddFileFolderModal;