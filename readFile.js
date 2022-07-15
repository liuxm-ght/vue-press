const path = require("path");
const fs = require("fs");
const routeMap = []
let mapJson = 'vuePressMap1.json'
let sourcePath = 'source'
let relPath = `./docs/${sourcePath}`
if(process.argv[2]){
  relPath = process.argv[2]
}
if(process.argv[3]){
  sourcePath = process.argv[3]
}
if(process.argv[4]){
  mapJson = process.argv[4]
}
let dirPath = path.resolve(__dirname,relPath)
let nNumber = 0

function readFile(dirPath,parent){
  var files = fs.readdirSync(dirPath)
  files.forEach(fileName => {
    if(['node_modules'].includes(fileName)) {
      nNumber+=parent.text
      return
    }
    var filePath = path.join(dirPath,fileName)
    var stats = fs.statSync(filePath)
    var isFile = stats.isFile()
    var isDir = stats.isDirectory()
    if (isFile) {
      if (path.extname(fileName) === '.md') {
        let plink = parent ? parent.plink + `/${fileName}` : `/${sourcePath}/${fileName}`
        const obj = {
          text: fileName,
          link: plink,
          children:[]
        }
        if (fileName === 'intro.md') {
          obj.text = 'Intro'
          parent&&parent.children.unshift(obj) || routeMap.unshift(obj)
        }else{
          parent&&parent.children.push(obj) || routeMap.push(obj)
        }
      }
    } else {
      let plink = parent ? parent.plink + `/${fileName}` : `/${sourcePath}/${fileName}`
      const obj = {
        text: fileName,
        plink,
        collapsible: true,
        children:[],
      }
      parent&&parent.children.push(obj)|| routeMap.push(obj)
      readFile(filePath,obj)
    }
  })
}
readFile(dirPath)

function WriteFile(){
  if(routeMap.length>0){
    fs.writeFileSync(path.join(__dirname,mapJson),JSON.stringify(routeMap),function(err) {
      if (err) {
        return console.error(err);
      }
    })
  }
}
WriteFile()

console.log('编译完成');
