import React, { useContext, useState } from 'react'
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
import FolderElement from '../../components/FolderElement/FolderElement';
import context from '../../Context';

const MainPage = (props) => {
  const isLight=useContext(context);
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
    <div className={isLight?'main-page-div':'main-page-div-dt'}>      
        <div className='left-div-main-page'>
          <Resizable>
            <LeftExplorer showPinModalFunc={handleShowPinModal} showAddFileFolderModalFunc={handleShowAddFileFolderModal}/>
          </Resizable>
        </div>
        <div className='right-div-main-page'>
          <div>
            <Header showAddFileFolderModalFunc={handleShowAddFileFolderModal} showChangePinFunc={handleShowChangePinModal} changeTheme={props.changeTheme} />
          </div>
          <div>
            <FileElement/>
            <FileElement/>
            <FileElement/>
            <FolderElement/>
            <FolderElement/>
            <FileElement/>
            <FolderElement/>
            <FileElement/>
            <FileElement/>
            <FileElement/>
            <FileElement/>
            <FileElement/>
          </div>
        </div>

        {showPinModal&&<PinModal showPinModalFunc={handleShowPinModal}/>}
        {showAddFileFolderModal&&<AddFileFolderModal showAddFileFolderModalFunc={handleShowAddFileFolderModal} element={element}/>}
        {showChangePinModal&&<SetNewPinModal showChangePinFunc={handleShowChangePinModal}/>}

    </div>
  )
}

export default MainPage;