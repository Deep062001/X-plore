import React from 'react';
import AppLogo from '../../assets/AppLogo.js';
import './LeftExplorer.scss';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FolderIndex from '../FolderIndex/FolderIndex.js';

const LeftExplorer = () => {
  return (
    <div className='left-explorer'>
      <div className='upper-part'>
        <AppLogo/>
        <div className='add-file-folder-buttons'>
          <button className='btn-add'><NoteAddOutlinedIcon/>Add File</button>
          <button className='btn-add'><CreateNewFolderOutlinedIcon/>Add Folder</button>
        </div>
        <FolderIndex/>
      </div>
      <div className='bottom-part'>
        <button className='btn-lock'><LockOutlinedIcon/> Lock Now</button>
      </div>
    </div>
  )
}

export default LeftExplorer