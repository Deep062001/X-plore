import React from 'react';
import FileIcon from '../../assets/FileIcon.svg';
import './FileElement.scss';
const FileElement = (props) => {
  return (
    <div className='file-outer-div'>
    <div className='file-element-div'>
        <img src={FileIcon} alt="file"/>
        <p>File Name</p>
    </div>
    </div>
  )
}

export default FileElement