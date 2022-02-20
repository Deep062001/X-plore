import React from 'react';
import AppLogo from '../../assets/AppLogo.js';
import './LeftExplorer.scss';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FolderIndex from '../FolderIndex/FolderIndex.js';
import context from '../../Context';

const LeftExplorer = (props) => {
  function handleElementAddedName(event){
    const name=event.target.name;
    props.showAddFileFolderModalFunc(name);
  }


  return (
    <div className='left-explorer'>
      <div className='upper-part'>
        <AppLogo/>
        <div className='add-file-folder-buttons'>
          <button className='btn-add' onClick={handleElementAddedName} name="File"><NoteAddOutlinedIcon/>Add File</button>
          <button className='btn-add' onClick={handleElementAddedName} name="Folder"><CreateNewFolderOutlinedIcon/>Add Folder</button>
        </div>
        <FolderIndex/>
      </div>
      <div className='bottom-part'>
        <button className='btn-lock' onClick={props.showPinModalFunc}><LockOutlinedIcon/> Lock Now</button>
      </div>
    </div>
  )
}

export default LeftExplorer