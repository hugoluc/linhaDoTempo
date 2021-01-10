const { log } = require("console");
const csv = require("csvtojson/v2");
const fs = require("fs")

var allData = []

var paginasCsvPath = '/Users/hugolucena/Desktop/linhaDoTempo/extras/paginas.csv'
var imagensCsvPath = '/Users/hugolucena/Desktop/linhaDoTempo/extras/imagens.csv'

var modules = []
var pages = []
var allImages = []


var getPages = (_pagedata) => {

    if (!_pagedata) return

    if(_pagedata.type == "video"){
        var data = { type : _pagedata.type, video : { videoUrl : 'content/' + _pagedata.module +'/'+ _pagedata.page_id +'/video.mov', title : _pagedata.title} }
    }else{
        var data = { type : _pagedata.type,
            video : {       
                title : _pagedata.title,
                description : _pagedata.description,
                images : getImages(_pagedata)
            }
        }
        
    }

    return data

}

function getImages(_pagedata){

    var data = []
    for (let index = 0; index < allImages.length; index++) {
        
        const img = allImages[index];

        if(img.module == _pagedata.module && img.module == _pagedata.module ){
            
            data.push({
                    url : 'content/' + _pagedata.module + '/' + _pagedata.page_id + '/' + img.filename + '.jpg',
                    title : img.descricao,
                    cover : (img.cover == "TRUE")
                }
            )
        }
    }

    return data

}


csv().fromFile(imagensCsvPath).then((_images) => {
    allImages = _images
})

csv().fromFile(paginasCsvPath).then((_pages) => {

    debugger

    var currentModule = 0
    var currentPage = -1
    modules.push({ pages : [] })
    
    for (var l = 0; l < _pages.length; l++) {    

        
        if(currentModule != (_pages[l].module-1)){
            modules.push({pages : []})
            currentModule++
            currentPage = -1
            modules[currentModule].pages.push(getPages(_pages[l]))
        }else{
            modules[currentModule].pages.push(getPages(_pages[l]))
        }
        currentPage++

        // console.log("MODULE:" + currentModule + " ,PAGE:" + currentPage );
        // console.log(_pages[l]);
        // console.log(modules[currentModule].pages[currentPage].video);
        // console.log("-----------------");

    }

    saveData()

})

function saveData() {

    var data = 'var data = ' + JSON.stringify(modules, null, 4)
  
    debugger
  
    fs.writeFile("/Users/hugolucena/Desktop/linhaDoTempo/data.js", data, 'utf8', function(error){
      console.log(data)
      console.log(error)
    })
}

// var index = 0
// var menuIndex = 0
// var wordsDone = false
// var menuDone = false

// getWords()
// getMenus()

// function getWords() { 

//   var csvFilePath = '/Users/hugolucena/Desktop/palavrasCruzadas/extra/palavras/' + index + '.csv'
//   console.log(">>>>>>>> getting words at index: " + csvFilePath);
  
//   //readFile---------------------------------------------------------
//   csv().fromFile(csvFilePath).then((jsonObj) => {

//     var palavras = []

//     for (var l = 0; l < jsonObj.length; l++) {
//       var palavra = {}
    
//       // if(jsonObj[l]["Significado PT"] == "abacaxi"){debugger}

//       palavra.origem = jsonObj[l]["Lingua"]
//       palavra.palavra = jsonObj[l]["Palavra PT"]
//       palavra.significado = jsonObj[l]["Significado PT"]
//       palavra.tradução = jsonObj[l]["Palavra Original"]
//       palavra.significadoOriginal = jsonObj[l]["Significado Original"]
      
//       if(jsonObj[l]["Audio Original"] == "NÃO HAVERÁ ÁUDIO"){
//         palavra.audio = undefined
//       }else{
//         palavra.audio = jsonObj[l]["Audio PT"]
//       }
//       if(jsonObj[l]["Audio Original"] == "NÃO HAVERÁ ÁUDIO"){
//         palavra.audioOriginal = undefined
//       }else{
//         palavra.audioOriginal = jsonObj[l]["Audio Original"]
//       }

//       palavras.push(palavra)
//     }
  
    
//     allData[index].palavras = palavras

//     if(index < names.length-1){
//       index++
//       getWords()
//     }else{
//       wordsDone = true
//       saveData()
//     }
//   })
// }

// function getMenus() {
  
//   var csvFilePath = '/Users/hugolucena/Desktop/palavrasCruzadas/extra/menus/' + menuIndex + '.csv'
//   console.log(">>>>>>>> getting menus at index: " + menuIndex);


//   //readFile---------------------------------------------------------
//   csv().fromFile(csvFilePath).then((jsonObj) => {

//     var menu = []

//     for (var l = 0; l < jsonObj.length; l++) {
//       if(jsonObj[l]["titulo"] != ""){
//         var item = {}
//         item.titulo = jsonObj[l]["Título"]
//         item.text = jsonObj[l]["Texto"]
//         item.imagens = jsonObj[l]["Imagens"].split(",")
//         menu.push(item)
//       }
//     }

//     allData[menuIndex].menu = menu

//     if(menuIndex < names.length-1){
//       menuIndex++
//       getMenus()
//     }else{
//       menuDone = true
//       saveData()
//     }
//   })
// }


