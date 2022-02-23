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
import completeStructure from '../../CompleteStructure';
import context from '../../Context';

const MainPage = (props) => {
  const isLight=useContext(context);
  const [showPinModal,setShowPinModal]=useState(false);
  const [showAddFileFolderModal, setShowAddFileFolderModal]=useState(false);
  const [showChangePinModal, setShowChangePinModal]=useState(false);
  const [element,setElement]=useState("");
  const [filesArr,setFilesArr]=useState([]);
  const [cS,setCS]=useState(completeStructure);
  const [render,setRender]=useState(1);
  const [currPath,setCurrPath]=useState([]);
  
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

  function showFiles(path){
    if(path.length===0) return [];
    let element= cS[path[0]];
    for(let i=1;i<path.length;i++){
       element=element.childNodes[path[i]];
    }
    let temp2=[];
    element.childNodes.forEach(item => {
      if(!item.isFolder)
        temp2.push(<FileElement name={item.name} key={item.id} content={item.content}/>)
    });

    return temp2;
  }

  function changeState(path){

    setCS((prevCS)=>{
      let element=prevCS[path[0]];
      for(let i=1;i<path.length;i++){
         element=element.childNodes[path[i]];
      }
      element.isActive=(!element.isActive);
      console.log(prevCS);
      setRender(prev=>{
        if(prev>10) 
          return 1;
        return prev+1;
      });
      return prevCS;
    })

    let temp=showFiles(path);
   // console.log(temp);
    setFilesArr(temp);
    
  }


  return (
    <div className={isLight?'main-page-div':'main-page-div-dt'}>      
        <div className='left-div-main-page'>
          <Resizable>
            {render>=0 && <LeftExplorer showPinModalFunc={handleShowPinModal} showAddFileFolderModalFunc={handleShowAddFileFolderModal} cS={cS} changeState={changeState}/>}
          </Resizable>
        </div>
        <div className='right-div-main-page'>
          <div>
            <Header showAddFileFolderModalFunc={handleShowAddFileFolderModal} showChangePinFunc={handleShowChangePinModal} changeTheme={props.changeTheme} />
          </div>
          <div>
            {filesArr}
            {/* <FileElement/>
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
            <FileElement/> */}
          </div>
        </div>

        {showPinModal&&<PinModal showPinModalFunc={handleShowPinModal}/>}
        {showAddFileFolderModal&&<AddFileFolderModal showAddFileFolderModalFunc={handleShowAddFileFolderModal} element={element}/>}
        {showChangePinModal&&<SetNewPinModal showChangePinFunc={handleShowChangePinModal}/>}

    </div>
  )
}

export default MainPage;