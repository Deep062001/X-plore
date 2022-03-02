import React, { useContext } from 'react'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import './FolderIndexItem.scss';
import context from '../../Context';
import CircleIcon from '@mui/icons-material/Circle';

const FolderIndexItem = (props) => {
  const isLight=useContext(context);
  const marginL=props.marginL.toString()+"px";
  
  function handleClick(){
    props.changeState(props.path);
  }


  return (
    <div className={isLight?(props.isOpen?'folder-index-item-active':'folder-index-item'):(props.isOpen?'folder-index-item-dt-active':'folder-index-item-dt')} onClick={handleClick} style={{ marginLeft : marginL }}>
         <div className='folder-name-div'>{props.isOpen?<FolderOpenOutlinedIcon/>:<FolderOutlinedIcon/>} {props.name}</div>
         <div>{props.isOpen&&<CircleIcon style={{padding:"6px"}} className="icon-active"/>}</div>
    </div>
  )
}

export default FolderIndexItem


//(props.isOpen?'folder-index-item-active':'folder-index-item') for showing open file
// margin style={{ marginLeft : marginL }}