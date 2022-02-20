import React, { useContext, useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import './Header.scss';
import AddDropdown from '../AddDropdown/AddDropdown';
import context from '../../Context';


const Header = (props) => {
    const isLight=useContext(context);
    const [dropdown , setDropdown]=useState(false);

    function showDropdown(){
        setDropdown(!dropdown);
        console.log("Clicked");
    }

    function handleElementAddedName(name){
        props.showAddFileFolderModalFunc(name);
        showDropdown();
    }

    function handleChangeTheme(){
        props.changeTheme();
    }



  return (
    <div className={isLight?'header-div':'header-div-dt'}>
        <div className='top-btn-search'>
            <div className='search-div'>
                <form>
                    <button type='submit'><SearchOutlinedIcon/></button>
                    <input type='text' placeholder='Search files and folders'/>
                </form>
            </div>
            <div className='btn-div'>
                <button className='btn-mode' onClick={handleChangeTheme}><LightModeOutlinedIcon/> Light Mode</button>
                <button className='btn-icons' onClick={showDropdown}><AddCircleOutlineOutlinedIcon/></button>   
                {dropdown && <AddDropdown showAddFileFolderModalFunc={handleElementAddedName}/> }
                <button className='btn-icons' onClick={props.showChangePinFunc}><SettingsOutlinedIcon/></button>
            </div>
        </div>
        <div className='bottom-path-div'>hh/sddsa/djd</div>
        <hr/>
    </div>
  )
}

export default Header