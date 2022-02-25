import React, { useContext, useState } from 'react';
import './EditFileModal.scss';
import context from '../../Context';

const EditFileModal = (props) => {
  const isLight=useContext(context);
  const [content,setContent]=useState(props.content);

  function handleChange(event){
    const txt=event.target.value;
    setContent(txt);
  }

  function onSave(e){
      e.preventDefault();
      props.changeContent(content);
      props.showEditFileModal();
  }
  return (
    <div className={isLight?'edit-file-modal':'edit-file-modal-dt'}>  
      <div className='edit-file-modal-div'>
        <h3>Edit File</h3>
        <form>
          <textarea className='file-text' placeholder='Type something here!' value={content} onChange={handleChange}/>
          <div>
            <button className='modal-submit-btn'  onClick={onSave}>Save File</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditFileModal