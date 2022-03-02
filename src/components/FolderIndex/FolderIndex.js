import React, { useContext, useEffect} from 'react';
import FolderIndexItem from '../FolderIndexItem/FolderIndexItem';
import './FolderIndex.scss';
import context from '../../Context';


// =========== not showing folder white when open initially in first render ==========================
const FolderIndex = (props) => {
  const isLight=useContext(context);
  
  function changeState(path){
    props.changeState(path);
  }

  let indexFolder=[];
  function createIndex(folderArray, marginL){
    folderArray.forEach(function(item){
      if(item.isFolder){
        const isOpen=(item.path===props.directory.currPath);
        indexFolder.push(<FolderIndexItem key={item.id} isOpen={isOpen} name={item.name}  marginL={marginL} path={item.path} changeState={changeState} />);      
        if(item.childNodes.length>0 && item.isActive){
          createIndex(item.childNodes,marginL+20);
        }
      }
    })
  }

  function createIndexCall(){
    indexFolder=[];
    createIndex(props.directory.structure,0);
    return indexFolder;
  }
  
  return (
    <div className={isLight?'folder-index':'folder-index-dt'}>
        {createIndexCall()}
    </div>
  )
}

export default FolderIndex
