function MakeFileFolder(id,name,path,isFolder,content){
    this.id=id
    this.name=name
    this.isFolder=isFolder
    this.path=path
    this.isActive=false
    this.content=content
    this.childNodes=[]
}; 

//isFolder-- true folder, false file
// is Active-- false means dont show its child folder in navbar,(but show files in side pane if clicked)


export default MakeFileFolder;