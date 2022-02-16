import React from 'react';
import './AddDropdown.scss';
const AddDropdown = () => {
  return (
    <div className='dropdown-div'>
        <button className='dropdown-btns'>New File</button>
        <hr/>
        <button className='dropdown-btns'>New Folder</button>
    </div>
  )
}

export default AddDropdown