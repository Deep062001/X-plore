import React, { useContext } from 'react';
import FolderIndexItem from '../FolderIndexItem/FolderIndexItem';
import './FolderIndex.scss';
import context from '../../Context';


const FolderIndex = () => {
  const isLight=useContext(context);

  return (
    <div className={isLight?'folder-index':'folder-index-dt'}>
        <FolderIndexItem/>
        <FolderIndexItem/>
        <FolderIndexItem/>
        <FolderIndexItem/>
        <FolderIndexItem/>
        <FolderIndexItem/>
        
    </div>
  )
}

export default FolderIndex