import React, { useContext, useState, useEffect } from 'react'
import { Resizable } from "re-resizable";
import { v4 as uuidv4 } from 'uuid';
import './MainPage.scss';
import AddFileFolderModal from '../../components/AddFileFolderModal/AddFileFolderModal';
import EditFileModal from '../../components/EditFileModal/EditFileModal';
import FileElement from '../../components/FileElement/FileElement';
import Header from '../../components/Header/Header';
import LeftExplorer from '../../components/LeftExplorer/LeftExplorer';
import PinModal from '../../components/PinModal/PinModal';
import SetNewPinModal from '../../components/SetNewPinModal/SetNewPinModal';
import completeStructure from '../../CompleteStructure';
import MakeFileFolder from '../../csConstructor';
import context from '../../Context';
import { COMPLETE_STRUCTURE } from '../../localStorageKeys';



const MainPage = (props) => {
  const isLight=useContext(context);
  const [showPinModal,setShowPinModal]=useState(true);
  const [showAddFileFolderModal, setShowAddFileFolderModal]=useState(false);
  const [showChangePinModal, setShowChangePinModal]=useState(false);
  const [showEditFileModal, setShowEditFileModal]=useState(false);
  const [element,setElement]=useState("");
   const [currFile, setCurrFile]=useState({
     name:"",
     path:[],
     content: ""
   });
  

  const [directory, setDirectory]= useState({
    structure : completeStructure,
    currPath: [0]
  });

  //==============================USE EFFECT=======================================

  useEffect(() => {
    const structureInfo = JSON.parse(localStorage.getItem(COMPLETE_STRUCTURE));
    if (structureInfo)
    { 
      setDirectory(structureInfo);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(COMPLETE_STRUCTURE, JSON.stringify(directory));
  }, [directory]);

  //=============================USE EFFECT END======================================


  // ============================ MODALS SHOW==================================
  function handleShowPinModal(){
    setShowPinModal(prevShowPinModal=>!prevShowPinModal);
  }

  function handleShowAddFileFolderModal(name){
    setElement(name);
    setShowAddFileFolderModal(prevShowAddFileFolderModal=>!prevShowAddFileFolderModal);
  }

  function handleShowChangePinModal(){
    setShowChangePinModal(prevShowChangePinModal=>!prevShowChangePinModal);
  }

  function handleShowEditFileModal(){
    setShowEditFileModal(prevShowEditFileModal=>!prevShowEditFileModal);
  }

   // ============================ MODALS SHOW END==================================




   // =========================INDEX AND FILES SHOW=================================

   function changeState(path){
     let cS=[...directory.structure];
     let element=cS[path[0]];
     for(let i=1;i<path.length;i++){
       element=element.childNodes[path[i]];
     }
     element.isActive=!element.isActive;

     setDirectory({
        structure: cS,
        currPath: path
     });
   }


   function makeActive(path){
    let cS=[...directory.structure];
    let element=cS[path[0]];
    element.isActive=true;
    for(let i=1;i<path.length;i++){
      element=element.childNodes[path[i]];
      element.isActive=true;
    }
    
    setDirectory({
       structure: cS,
       currPath: path
    });
  }


   function showFiles(path){
     let filesArr=[];
     if(path.length!==0){
      let element=directory.structure[path[0]];
      for(let i=1;i<path.length;i++){
        element=element.childNodes[path[i]];
      }

      element.childNodes.forEach(item=>{
        if(!item.isFolder){
          filesArr.push(<FileElement path={item.path} name={item.name} key={item.id} content={item.content} editFile={editFile}/>)
        }
      })

      return filesArr;
     }
   }
  

  // =========================INDEX AND FILES SHOW END=================================






  // ========================ADDING FILES FOLDERS=====================================

  function makeElement(isFolder, elementName){
    let cS=[...directory.structure];
    if(directory.currPath.length!==0){
      let element=cS[directory.currPath[0]];
      for(let i=1;i<directory.currPath.length;i++){
         element=element.childNodes[directory.currPath[i]];
      }
      const elementPath= [...element.path, element.childNodes.length];
      const id=uuidv4(); 
      const newElement=new MakeFileFolder(id,elementName,elementPath, isFolder, " ");
      element.childNodes.push(newElement);
      setDirectory((prev)=>{
        return{
          ...prev,
          structure: cS
        }
      });
    } 
  }

  
  // ========================ADDING FILES FOLDERS END=====================================





  // ============================EDITING FILES========================================

  function editFile(Name,Content,Path){
    setCurrFile({
      name: Name,
      content: Content,
      path : Path
    });

    handleShowEditFileModal();
  }

  function makeEdit(path, Content){
    let cS=[...directory.structure];
    let element=cS[path[0]];
    for(let i=1;i<path.length;i++){
      element=element.childNodes[path[i]];
    }
    element.content=Content;

    setDirectory((prev)=>{
      return{
        ...prev,
        structure: cS
      }
    });

    handleShowEditFileModal();

  }


  // ==========================EDITING FILES END=======================================

  return (
    <div className={isLight?'main-page-div':'main-page-div-dt'}>      
        <div className='left-div-main-page'>
          <Resizable>
            <LeftExplorer showPinModalFunc={handleShowPinModal} showAddFileFolderModalFunc={handleShowAddFileFolderModal} directory={directory} changeState={changeState} />
          </Resizable>
        </div>
        <div className='right-div-main-page'>
          <div>
            <Header showAddFileFolderModalFunc={handleShowAddFileFolderModal} showChangePinFunc={handleShowChangePinModal} changeTheme={props.changeTheme} directory={directory} changeState={changeState} makeActive={makeActive}/>
          </div>
          <div>
            {showFiles(directory.currPath)}
          </div>
        </div>

        {showPinModal&&<PinModal showPinModalFunc={handleShowPinModal}/>}
        {showAddFileFolderModal&&<AddFileFolderModal showAddFileFolderModalFunc={handleShowAddFileFolderModal} element={element} makeElement={makeElement} />}
        {showChangePinModal&&<SetNewPinModal showChangePinFunc={handleShowChangePinModal}/>}
        {showEditFileModal&&<EditFileModal makeEdit={makeEdit} currFile={currFile} handleShowEditFileModal={handleShowEditFileModal}/>}

    </div>
  )
}

export default MainPage;