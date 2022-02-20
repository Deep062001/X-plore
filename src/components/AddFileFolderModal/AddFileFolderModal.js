import React, { useContext } from 'react';
import './AddFileFolderModal.scss';
import context from '../../Context';

const AddFileFolderModal = (props) => {
  const isLight=useContext(context);
  return (
    <div className={isLight?'modal':'modal-dk'} onClick={props.showAddFileFolderModalFunc}>
    <div className='folder-file-modal-div'>
    <h3>Create {props.element}</h3>
      <form>
      <p>Enter {props.element} name: </p>
      <input className='name-input' type='character'/>
      <div>
        <button className='modal-submit-btn'>Create Now</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default AddFileFolderModal;