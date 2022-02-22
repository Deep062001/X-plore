import React, { useContext, useEffect, useState } from 'react';
import FolderIndexItem from '../FolderIndexItem/FolderIndexItem';
import './FolderIndex.scss';
import context from '../../Context';
import completeStructure from '../../CompleteStructure';
import FileElement from '../FileElement/FileElement';

const FolderIndex = (props) => {
  const isLight=useContext(context);
  const [idxFolder,setIdxFolder]=useState([]);
  let indexFolder=[];
  let indexFile=[];

  function changeState(path){
    let element=completeStructure[path[0]];

    for(let i=1;i<path.length;i++){
      element=element.childNodes[path[i]];
    }

    element.isActive=(!element.isActive);

    if(indexFolder=[]){
      createIndex(completeStructure,0);
    };

    if(indexFile=[]){
      console.log(element.childNodes);
      showFiles(element.childNodes);
    }

    setIdxFolder(indexFolder);

    props.passFiles(indexFile);

  }

  function showFiles(childNodes){
    childNodes.forEach(function(item){
      if(!item.isFolder){
        indexFile.push(<FileElement key={item.id} name={item.name}/>);
      }
    })

    console.log(indexFile);
  }

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

  useEffect(()=>{
      createIndex(completeStructure,0);
      setIdxFolder(indexFolder);
  },[]);

  
  
  return (
    <div className={isLight?'folder-index':'folder-index-dt'}>
        {idxFolder}
        {/* <FolderIndexItem/>
        <FolderIndexItem/>
        <FolderIndexItem/>
        <FolderIndexItem/>
        <FolderIndexItem/>
        <FolderIndexItem/> */}
        
        
    </div>
  )
}

export default FolderIndex
