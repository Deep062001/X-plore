import React, { useContext, useState } from 'react';
import './EditFileModal.scss';
import context from '../../Context';

const EditFileModal = (props) => {
  const isLight=useContext(context);
  const [content,setContent]=useState(props.currFile.content);
  // take out content from local storage or cS passed

  function handleChange(event){
    const value=event.target.value;
    setContent(value);
  }

  function onSave(e){
      e.preventDefault();
      // change the value in cS by passing the content to main window
      props.makeEdit(props.currFile.path, content);
  }
  return (
    <div className={isLight?'edit-file-modal':'edit-file-modal-dt'} onClick={props.handleShowEditFileModal}>  
      <div className='edit-file-modal-div' onClick={(e)=>{e.stopPropagation()}}>
        <h3>Editing File {props.currFile.name}</h3>
        <form>
          <textarea className='file-text' placeholder='Type something here!' value={content} onChange={handleChange} autoFocus/>
          <div>
            <button className='modal-submit-btn'  onClick={onSave}>Save File</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditFileModal