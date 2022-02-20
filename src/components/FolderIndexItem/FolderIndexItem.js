import React, { useContext } from 'react'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import './FolderIndexItem.scss';
import context from '../../Context';

const FolderIndexItem = () => {
  const isLight=useContext(context);
  return (
    <div className={isLight?'folder-index-item':'folder-index-item-dt'}>
          <FolderOutlinedIcon/> Some Folder Name
    </div>
  )
}

export default FolderIndexItem