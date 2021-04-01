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
    // debugger

    if(_pagedata.type == "video"){
        var data = { type : _pagedata.type, video : {
            videoUrl : 'content/' + _pagedata.module +'/'+ _pagedata.page_id +'/1.mp4', 
            title : _pagedata.title,
            underTitle : _pagedata.subtitle,
            subtitles : [
                { 
                    type : "libras",
                    url : 'content/' + _pagedata.module +'/'+ _pagedata.page_id +'/libras.mp4',
                    title : "Libras",
                    default : false
                }
                ,
                { 
                    type : "text",
                    url : 'content/' + _pagedata.module +'/'+ _pagedata.page_id + '/es.vtt' ,
                    title : "Ingles",
                    default : false
                },
                { 
                    type : "text",
                    url : 'content/' + _pagedata.module +'/'+ _pagedata.page_id + '/es.vtt' ,
                    title : "Espanhol",
                    default : false
                },
                { 
                    type : "text",
                    url : 'content/' + _pagedata.module +'/'+ _pagedata.page_id + '/en.vtt' ,
                    title : 'Portugês',
                    default : true
                }
                ]
            }
        }
    }else{
        var data = { type : "content" ,
            video : {       
                title : _pagedata.title,
                underTitle : _pagedata.subtitle,
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

function openPagesCSV(){
    console.log(2);
    csv().fromFile(paginasCsvPath).then((_pages) => {
    
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
    
        }
    
        saveData()
    
    })

}

function saveData() { 

    var data = 'var data = ' + JSON.stringify(modules, null, 4)
  
    debugger
  
    fs.writeFile("/Users/hugolucena/Desktop/linhaDoTempo/data.js", data, 'utf8', function(error){
    })
}


///-----------------------------

function openImageCSV(){
    console.log(1);
    csv().fromFile(imagensCsvPath).then((_images) => {
        
        allImages = _images
        openPagesCSV()
    })
}




openImageCSV()