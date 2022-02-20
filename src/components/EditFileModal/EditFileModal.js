import React from 'react';
import './EditFileModal.scss';
import context from '../../Context';

const EditFileModal = () => {
  return (
    <div className='modal'>  
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