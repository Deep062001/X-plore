import React, { useState } from 'react'
import AddDropdown from '../../components/AddDropdown/AddDropdown';
import AddFileFolderModal from '../../components/AddFileFolderModal/AddFileFolderModal';
import EditFileModal from '../../components/EditFileModal/EditFileModal';
import FileElement from '../../components/FileElement/FileElement';
import Header from '../../components/Header/Header';
import LeftExplorer from '../../components/LeftExplorer/LeftExplorer';
import PinModal from '../../components/PinModal/PinModal';
import SetNewPinModal from '../../components/SetNewPinModal/SetNewPinModal';
import { Resizable } from "re-resizable";
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
            <Resizable>
            <LeftExplorer showPinModalFunc={handleShowPinModal} showAddFileFolderModalFunc={handleShowAddFileFolderModal}/>
            </Resizable>
        </div>
        <div className='right-div-main-page'>
          <div>
            <Header showAddFileFolderModalFunc={handleShowAddFileFolderModal} showChangePinFunc={handleShowChangePinModal}/>
          </div>
          <div>
            <FileElement/>
            <FileElement/>
            <FileElement/>
          </div>
        </div>
        {/* <SetNewPinModal/> */}

        {showPinModal&&<PinModal showPinModalFunc={handleShowPinModal}/>}
        {showAddFileFolderModal&&<AddFileFolderModal showAddFileFolderModalFunc={handleShowAddFileFolderModal} element={element}/>}
        {showChangePinModal&&<SetNewPinModal showChangePinFunc={handleShowChangePinModal}/>}

    </div>
  )
}

export default MainPage;