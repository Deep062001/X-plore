import React, { useContext } from 'react';
import FileIcon from '../../assets/FileIcon.svg';
import './FileElement.scss';
import context from '../../Context';

const FileElement = (props) => {
  const isLight=useContext(context);

  function handleClick(){
    props.editFile(props.name, props.content, props.path);
  }
 
  return (
    <div className={isLight?'file-outer-div':'file-outer-div-dt'} onClick={handleClick}>
    <div className='file-element-div'>
        <img src={FileIcon} alt="file"/>
        <p>{props.name}</p>
    </div>
    </div>
  )
}

export default FileElement