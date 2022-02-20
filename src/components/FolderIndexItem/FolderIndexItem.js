import React from 'react'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import './FolderIndexItem.scss';
import context from '../../Context';

const FolderIndexItem = () => {
  return (
    <div className='folder-index-item'>
          <FolderOutlinedIcon/> Some Folder Name
    </div>
  )
}

export default FolderIndexItem