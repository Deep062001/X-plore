import React, { useContext, useEffect, useState } from 'react';
import FolderIndexItem from '../FolderIndexItem/FolderIndexItem';
import './FolderIndex.scss';
import context from '../../Context';
import completeStructure from '../../CompleteStructure';
import FileElement from '../FileElement/FileElement';

const FolderIndex = (props) => {
  const isLight=useContext(context);
  function changeState(path){
    props.changeState(path);
  }



  let indexFolder=[];
  function createIndex(folderArray, marginL){
    folderArray.forEach(function(item){
      if(item.isFolder){
        indexFolder.push(<FolderIndexItem key={item.id} name={item.name} marginL={marginL} path={item.path} isActive={item.isActive} changeState={changeState}/>);
        if(item.childNodes.length>0 && item.isActive){
          createIndex(item.childNodes,marginL+20);
        }
      }
    })
  }

  function temp(){
    if(indexFolder=[]){
        createIndex(props.cS,0);
    }
    console.log(indexFolder);
  }


  
  
  
  return (
    <div className={isLight?'folder-index':'folder-index-dt'}>
        {temp() ? indexFolder: indexFolder}
    </div>
  )
}

export default FolderIndex
