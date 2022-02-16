import React from 'react'
import AddDropdown from '../../components/AddDropdown/AddDropdown';
import AddFileFolderModal from '../../components/AddFileFolderModal/AddFileFolderModal';
import EditFileModal from '../../components/EditFileModal/EditFileModal';
import Header from '../../components/Header/Header';
import LeftExplorer from '../../components/LeftExplorer/LeftExplorer';
import PinModal from '../../components/PinModal/PinModal';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className='main-page-div'>      
        <div className='left-div-main-page'>
            <LeftExplorer/>
        </div>
        <div className='right-div-main-page'>
            <Header/>
        </div>

        {/* <PinModal/> */}
        {/* <AddFileFolderModal/> */}
        {/* <EditFileModal/> */}

    </div>
  )
}

export default MainPage;