import React, { useState } from 'react'
import AddDropdown from '../../components/AddDropdown/AddDropdown';
import AddFileFolderModal from '../../components/AddFileFolderModal/AddFileFolderModal';
import EditFileModal from '../../components/EditFileModal/EditFileModal';
import Header from '../../components/Header/Header';
import LeftExplorer from '../../components/LeftExplorer/LeftExplorer';
import PinModal from '../../components/PinModal/PinModal';
import SetNewPinModal from '../../components/SetNewPinModal/SetNewPinModal';
import './MainPage.scss';

const MainPage = () => {
  const [showPinModal,setShowPinModal]=useState(false);
  const [showAddFileFolderModal, setShowAddFileFolderModal]=useState(false);
  const [showChangePinModal, setShowChangePinModal]=useState(false);
  const [element,setElement]=useState("");
  
  function handleShowPinModal(){
    setShowPinModal(prevShowPinModal=>!prevShowPinModal);
  }

  function handleShowAddFileFolderModal(name){
    setElement(name);
    setShowAddFileFolderModal(prevShowAddFileFolderModal=>!prevShowAddFileFolderModal);
  }

  function handleShowChangePinModal(name){
    setElement(name);
    setShowChangePinModal(prevShowChangePinModal=>!prevShowChangePinModal);
  }


  return (
    <div className='main-page-div'>      
        <div className='left-div-main-page'>
            <LeftExplorer showPinModalFunc={handleShowPinModal} showAddFileFolderModalFunc={handleShowAddFileFolderModal}/>
        </div>
        <div className='right-div-main-page'>
            <Header showAddFileFolderModalFunc={handleShowAddFileFolderModal} showChangePinFunc={handleShowChangePinModal}/>
        </div>
        {/* <SetNewPinModal/> */}

        {showPinModal&&<PinModal showPinModalFunc={handleShowPinModal}/>}
        {showAddFileFolderModal&&<AddFileFolderModal showAddFileFolderModalFunc={handleShowAddFileFolderModal} element={element}/>}
        {showChangePinModal&&<SetNewPinModal showChangePinFunc={handleShowChangePinModal}/>}

    </div>
  )
}

export default MainPage;