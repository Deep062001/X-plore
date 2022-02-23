import React, { useContext, useState } from 'react'
import { Resizable } from "re-resizable";
import { v4 as uuidv4 } from 'uuid';
import './MainPage.scss';
import AddDropdown from '../../components/AddDropdown/AddDropdown';
import AddFileFolderModal from '../../components/AddFileFolderModal/AddFileFolderModal';
import EditFileModal from '../../components/EditFileModal/EditFileModal';
import FileElement from '../../components/FileElement/FileElement';
import Header from '../../components/Header/Header';
import LeftExplorer from '../../components/LeftExplorer/LeftExplorer';
import PinModal from '../../components/PinModal/PinModal';
import SetNewPinModal from '../../components/SetNewPinModal/SetNewPinModal';
import FolderElement from '../../components/FolderElement/FolderElement';
import completeStructure from '../../CompleteStructure';
import MakeFileFolder from '../../csConstructor';
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


  // ============================ MODALS SHOW==================================
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

   // ============================ MODALS SHOW END==================================


   // =========================INDEX AND FILES SHOW=================================
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
      return prevCS;
    })

    setRender(prev=>{
      if(prev>10) 
        return 1;
      return prev+1;
    });
    

    let temp=showFiles(path);
   // console.log(temp);
    setFilesArr(temp);
    setCurrPath(path);
    
  }

  // =========================INDEX AND FILES SHOW END=================================


  // ========================ADDING FILES FOLDERS=====================================

  function makeElement(elementName, isFolder){
    setCS((prevCS)=>{
      let element=prevCS[currPath[0]];
      for(let i=1;i<currPath.length;i++){
         element=element.childNodes[currPath[i]];
      }
      const elementPath= [...element.path, element.childNodes.length];
      const id=uuidv4(); 
      const newElement=new MakeFileFolder(id,elementName,elementPath, isFolder, " ");
      element.childNodes.push(newElement);
      console.log(prevCS);
      return prevCS;
    })

    
    setRender(prev=>{
      if(prev>10) 
        return 1;
      return prev+1;
    });
    

    let temp=showFiles(currPath);
   // console.log(temp);
    setFilesArr(temp);

  }


  

  // ========================ADDING FILES FOLDERS END=====================================

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
        {showAddFileFolderModal&&<AddFileFolderModal showAddFileFolderModalFunc={handleShowAddFileFolderModal} element={element} makeElement={makeElement}/>}
        {showChangePinModal&&<SetNewPinModal showChangePinFunc={handleShowChangePinModal}/>}

    </div>
  )
}

export default MainPage;