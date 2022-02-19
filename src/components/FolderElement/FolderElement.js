import React from 'react';
import FolderIcon from '../../assets/FolderIcon.svg';
import './FolderElement.scss';
const FolderElement = (props) => {
  return (
    <div className='folder-outer-div'>
    <div className='folder-element-div'>
        <img src={FolderIcon} alt="Folder"/>
        <p>Folder Name</p>
    </div>
    </div>
  )
}

export default FolderElement