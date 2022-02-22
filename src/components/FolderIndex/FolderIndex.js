import React, { useContext, useEffect, useState } from 'react';
import FolderIndexItem from '../FolderIndexItem/FolderIndexItem';
import './FolderIndex.scss';
import context from '../../Context';
import completeStructure from '../../CompleteStructure';

const FolderIndex = () => {
  const isLight=useContext(context);
  const [idx,setIdx]=useState([]);
  let index=[];

  function changeState(path){
    let element=completeStructure[path[0]];

    for(let i=1;i<path.length;i++){
      element=element.childNodes[path[i]];
    }

    element.isActive=(!element.isActive);
    console.log(element);

    if(index=[]){
      createIndex(completeStructure,0);
    };
    
    setIdx(index);

  }

  function createIndex(folderArray, marginL){
    folderArray.forEach(function(item){
      index.push(<FolderIndexItem key={item.id} name={item.name} marginL={marginL} path={item.path} isActive={item.isActive} changeState={changeState}/>);

      if(item.childNodes.length>0 && item.isActive){
        createIndex(item.childNodes,marginL+20);
      }
    })
  }

  useEffect(()=>{
    console.log("I am Called useEffect");
      index=[];
      createIndex(completeStructure,0);
      setIdx(index);
  },[]);

  
  
  return (
    <div className={isLight?'folder-index':'folder-index-dt'}>
        {idx}
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
