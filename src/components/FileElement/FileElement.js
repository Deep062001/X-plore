import React, { useContext } from 'react';
import FileIcon from '../../assets/FileIcon.svg';
import './FileElement.scss';
import context from '../../Context';

const FileElement = (props) => {
  const isLight=useContext(context);
  return (
    <div className={isLight?'file-outer-div':'file-outer-div-dk'}>
    <div className='file-element-div'>
        <img src={FileIcon} alt="file"/>
        <p>File Name</p>
    </div>
    </div>
  )
}

export default FileElement