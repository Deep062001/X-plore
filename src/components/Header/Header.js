import React, { useContext, useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './Header.scss';
import AddDropdown from '../AddDropdown/AddDropdown';
import context from '../../Context';
import SearchItems from '../SearchItems/SearchItems';


const Header = (props) => {
    const isLight=useContext(context);
    const [dropdown , setDropdown]=useState(false);
// =================NO BUGS============================
    function showDropdown(){
        setDropdown(!dropdown);
       // console.log("Clicked");
    }

    function handleElementAddedName(name){
        props.showAddFileFolderModalFunc(name);
        showDropdown();
    }

    function handleChangeTheme(){
        props.changeTheme();
    }

// ================NO BUGS END===========================

//====================SEARCH==========================

const [searchText, setSearchText] = useState("");
const [items, setItems] = useState([]);
function selectElement(path){
    setSearchText("");
    props.changeState(path);
}

function makeActive(path){
  setSearchText("");
  props.makeActive(path);
}
let arr = [];
function searchdiv(compStructure, t) {
  compStructure.forEach((item) => {
    if (item.name.toLowerCase().includes(t.toLowerCase())) {
      console.log(item.path);
      arr.push(
        <SearchItems path={item.path} key={item.id} name={item.name} makeActive={makeActive} isFolder={item.isFolder}/>
      );
    }

    if (item.childNodes.length > 0) {
      searchdiv(item.childNodes, t);
    }
  });
}
function func(t) {
  arr = [];

  searchdiv(props.directory.structure, t);
  setItems(arr);

  return arr;
}

function handleChange(event) {
  const t = event.target.value;

  setSearchText((prev) => {
    func(t);
    return t;
  });
}

//===============SEARCH END==========================

function pathTillNow(){
  let Path=[...props.directory.currPath];
  let pathArr=[];
  let element=props.directory.structure[Path[0]];
  pathArr.push(<span key={element.id}><span className="span-path" onClick={()=>{
    makeActive(Path.slice(0,1));
  }}>{element.name } </span> / </span>);
  for(let i=1;i<Path.length;i++){
     element=element.childNodes[Path[i]];
     pathArr.push(<span key={element.id}><span className="span-path" onClick={()=>{
        makeActive(Path.slice(0,i+1));
     }}>{element.name }</span> / </span>);
  }

  return pathArr;
}





  return (
    <div className={isLight?'header-div':'header-div-dt'}>
        <div className='top-btn-search'>
            <div className='search-div'>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <button type='submit'><SearchOutlinedIcon/></button>
                    <input type='text' placeholder='Search files and folders' onChange={handleChange} value={searchText}/>
                    {searchText.length > 0 && (
                       <div className="search-items-div">
                         {items.length > 0 ? items : <SearchItems name="No results to match your search" />}
                       </div>
                    )}
                </form>
            </div>
            <div className='btn-div'>
                {isLight?<button className='btn-mode' onClick={handleChangeTheme}><LightModeOutlinedIcon/> Light Mode</button>:
                <button className='btn-mode' onClick={handleChangeTheme}><DarkModeOutlinedIcon/> Dark Mode</button>}
                <button className='btn-icons' onClick={showDropdown}><AddCircleOutlineOutlinedIcon/></button>   
                {dropdown && <AddDropdown showAddFileFolderModalFunc={handleElementAddedName}/> }
                <button className='btn-icons' onClick={props.showChangePinFunc}><SettingsOutlinedIcon/></button>
            </div>
        </div>
        <div className='bottom-path-div'>
          {props.directory.currPath.length>0 && pathTillNow()}
        </div>
        <hr/>
    </div>
  )
}

export default Header