import React from 'react';
import FolderIndexItem from '../FolderIndexItem/FolderIndexItem';
import './FolderIndex.scss';
import context from '../../Context';


const FolderIndex = () => {

  return (
    <div className='folder-index'>
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