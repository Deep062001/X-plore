function MakeFileFolder(name,parent,isFolder,content){
    this.id=11,
    this.name=name,
    this.isFolder=isFolder,
    this.path=[...parent.path, parent.childNodes.length],
    this.isActive=false,
    this.content=content,
    this.childNodes=[]
}; 

//isFolder-- true folder, false file
// is Active-- false means dont show its child folder in navbar,(but show files in side pane if clicked)


export default MakeFileFolder;