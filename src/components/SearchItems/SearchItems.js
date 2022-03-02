import React,{useContext} from 'react'
import context from '../../Context';
import FolderIcon from '@mui/icons-material/Folder';
import ArticleIcon from '@mui/icons-material/Article';
import './SearchItems.scss';
const SearchItems = (props) => {
  const isLight=useContext(context);
  function selectElement(){
    let itemPath=[...props.path];
      if(!props.isFolder){
        itemPath.pop();
      }
      props.makeActive(itemPath);      
  }
  return (
    <div className={isLight?'search-item-div':'search-item-div-dt'} onClick={selectElement}>
        <div className='item-flex'>{props.isFolder?<FolderIcon className='icon'/>:<ArticleIcon className='icon'/>} {props.name}</div>   
    </div>
  )
}

export default SearchItems