import React, { useContext } from 'react';
import FolderIndexItem from '../FolderIndexItem/FolderIndexItem';
import './FolderIndex.scss';
import context from '../../Context';
import completeStructure from '../../CompleteStructure';

const FolderIndex = () => {
  const isLight=useContext(context);
  
  const index=[];

  function createIndex(folderArray, marginL){
    folderArray.forEach(function(item){
      index.push(<FolderIndexItem name={item.name} marginL={marginL} />);

      if(item.childNodes.length>0){
        createIndex(item.childNodes,marginL+20);
      }
    })
  }
  
  return (
    <div className={isLight?'folder-index':'folder-index-dt'}>
        {createIndex(completeStructure,0)}
        {index}
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