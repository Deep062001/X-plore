import React from 'react';
import './AddDropdown.scss';
import context from '../../Context';

const AddDropdown = (props) => {
  function handleClick(event){
    const name =event.target.name;
    props.showAddFileFolderModalFunc(name);
  }


  return (
    <div className='dropdown-div'>
        <button className='dropdown-btns' name='File' onClick={handleClick}>New File</button>
        <hr/>
        <button className='dropdown-btns' name='Folder' onClick={handleClick}>New Folder</button>
    </div>
  )
}

export default AddDropdown