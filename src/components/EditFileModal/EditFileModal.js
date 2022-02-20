import React, { useContext } from 'react';
import './EditFileModal.scss';
import context from '../../Context';

const EditFileModal = () => {
  const isLight=useContext(context);
  return (
    <div className={isLight?'modal':'modal-dt'}>  
      <div className='edit-file-modal-div'>
        <h3>Edit File</h3>
        <form>
          <textarea className='file-text' placeholder='Type something here!'/>
          <div>
            <button className='modal-submit-btn'>Save File</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditFileModal