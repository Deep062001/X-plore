import React, { useContext } from 'react'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import './FolderIndexItem.scss';
import context from '../../Context';

const FolderIndexItem = (props) => {
  const isLight=useContext(context);
  const marginL=props.marginL.toString()+"px";
  
  function handleClick(){
    props.changeState(props.path);
  }


  return (
    <div className={isLight?'folder-index-item':'folder-index-item-dt'} style={{ marginLeft : marginL }} onClick={handleClick}>
          <FolderOutlinedIcon/> {props.name}
    </div>
  )
}

export default FolderIndexItem