import React, { useContext, useEffect } from 'react';
import AppLogoLT from '../../assets/AppLogoLT.svg';
import AppLogoDT from '../../assets/AppLogoDT.svg';
import './LeftExplorer.scss';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FolderIndex from '../FolderIndex/FolderIndex.js';
import context from '../../Context';

const LeftExplorer = (props) => {
  const isLight=useContext(context);
  function handleElementAddedName(event){
    const name=event.target.name;
    props.showAddFileFolderModalFunc(name);
  }

  function changeState(path){
    props.changeState(path);
  }

  useEffect(()=>{
    console.log("I m called left explorer");
  })


  return (
    <div className={isLight?'left-explorer':'left-explorer-dt'}>
      <div className='upper-part'>
        <img src={isLight?AppLogoLT:AppLogoDT} alt="cuvette"/>
        <div className='add-file-folder-buttons'>
          <button className='btn-add' onClick={handleElementAddedName} name="File"><NoteAddOutlinedIcon/>Add File</button>
          <button className='btn-add' onClick={handleElementAddedName} name="Folder"><CreateNewFolderOutlinedIcon/>Add Folder</button>
        </div>
        <FolderIndex cS={props.cS} changeState={changeState} currPath={props.currPath}/>
      </div>
      <div className='bottom-part'>
        <button className='btn-lock' onClick={props.showPinModalFunc}><LockOutlinedIcon/> Lock Now</button>
      </div>
    </div>
  )
}

export default LeftExplorer