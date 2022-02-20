import React, { useContext } from 'react';
import FolderIcon from '../../assets/FolderIcon.svg';
import './FolderElement.scss';
import context from '../../Context';

const FolderElement = (props) => {
  const isLight=useContext(context);
  return (
    <div className={isLight?'folder-outer-div':'folder-outer-div-dt'}>
    <div className='folder-element-div'>
        <img src={FolderIcon} alt="Folder"/>
        <p>Folder Name</p>
    </div>
    </div>
  )
}

export default FolderElement