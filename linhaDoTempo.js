
var options = {
    pages : [
        {
            type : "video",
            video : {
                videoUrl : "videos/0/video.mp4",
                title : "Cras varius bibendum risus quis molestie",
                subtitles : [
                    { 
                        type : "libras",
                        url : 'libras.webm' ,
                        title : "Libras",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/es.vtt' ,
                        title : "Ingles",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/de.vtt' ,
                        title : "Espanhol",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/en.vtt' ,
                        title : 'Portugês',
                        default : true
                    }
                ]
            },
        },
        // {     
        //     type : "content",
        //     video : {
        //         title : "Cras varius bibendum risus quis molestie",
        //         description : "Cras varius bibendum risus quis molestie",
        //         images : [
        //             { 
        //                 url : 'content/' + cIndex + '/img.jpg' ,
        //                 title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        //                 cover : true
        //             },
        //             { 
        //                 url : 'content/' + cIndex + '/img.jpg' ,
        //                 title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        //                 cover : true
        //             },
        //             { 
        //                 url : 'content/' + cIndex + '/img.jpg' ,
        //                 title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        //                 cover : true
        //             }
        //         ]
        //     }
            
        // },
        {
            type : "video",
            video : {
                videoUrl : "videos/0/video.mp4",
                title : "Cras varius bibendum risus quis molestie",
                subtitles : [
                    { 
                        type : "libras",
                        url : 'libras.webm' ,
                        title : "Libras",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/es.vtt' ,
                        title : "Ingles",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/de.vtt' ,
                        title : "Espanhol",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/en.vtt' ,
                        title : 'Portugês',
                        default : true
                    }
                ]
            },
        },
        {
            type : "video",
            video : {
                videoUrl : "videos/0/video.mp4",
                title : "Cras varius bibendum risus quis molestie",
                subtitles : [
                    { 
                        type : "libras",
                        url : 'libras.webm' ,
                        title : "Libras",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/es.vtt' ,
                        title : "Ingles",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/de.vtt' ,
                        title : "Espanhol",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/en.vtt' ,
                        title : 'Portugês',
                        default : true
                    }
                ]
            },
        },
        {
            type : "video",
            video : {
                videoUrl : "videos/0/video.mp4",
                title : "Cras varius bibendum risus quis molestie",
                subtitles : [
                    { 
                        type : "libras",
                        url : 'libras.webm' ,
                        title : "Libras",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/es.vtt' ,
                        title : "Ingles",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/de.vtt' ,
                        title : "Espanhol",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/en.vtt' ,
                        title : 'Portugês',
                        default : true
                    }
                ]
            },
        },
        {
            type : "video",
            video : {
                videoUrl : "videos/0/video.mp4",
                title : "Cras varius bibendum risus quis molestie",
                subtitles : [
                    { 
                        type : "libras",
                        url : 'libras.webm' ,
                        title : "Libras",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/es.vtt' ,
                        title : "Ingles",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/de.vtt' ,
                        title : "Espanhol",
                        default : false
                    },
                    { 
                        type : "text",
                        url : 'videos/' + index + '/subs/en.vtt' ,
                        title : 'Portugês',
                        default : true
                    }
                ]
            },
        }
    ]
}

//===============================================================
//===============================================================
//                             Linha do tempo
//===============================================================
//===============================================================
function linhaDoTempo(_data){

    this.data = _data
    this.videos = []
    this.videosContaners = []
    this.indicators = []
    this.overlays = []
    this.currentPage = 0;
    this.moved = false
    this.menuOpened = true
    this.pages = []

    this.createDOMElements()

    setTimeout( ()=> {
        console.log("12");
        
        this.goToPage(this.data.length-1)
        setTimeout( ()=> {this.goToPage(0)},500)

    },500)

}

//controleers functions
//=============================
linhaDoTempo.prototype.toNextPage = function(){
    console.log("to next page");
    this.goToPage(mod(this.currentPage + 1,this.data.length))
}

linhaDoTempo.prototype.toPreviousPage = function(){
    console.log("to previous page");
    this.goToPage(mod(this.currentPage - 1,this.data.length))
}

linhaDoTempo.prototype.goToPage = function(_pageId){

    if( this.currentPage - _pageId == -1 || this.currentPage - _pageId == this.data.length-1 ){
        
        this.indicators[this.currentPage].classList.add("right")
        this.indicators[this.currentPage].classList.remove("on")
        this.indicators[_pageId].classList.add("on")
        this.indicators[_pageId].classList.remove("right")

    }else{
       
        this.indicators[this.currentPage].classList.remove("right")
        this.indicators[this.currentPage].classList.remove("on")
        this.indicators[_pageId].classList.add("on")
        this.indicators[_pageId].classList.add("right")
    }
    
    this.currentPage = _pageId
    this.pagesContainer.style.transform = "translateX(" + ((-window.outerWidth) * _pageId) + "px)"
    this.headerTitle.innerHTML = this.pages[this.currentPage].data.title

}

linhaDoTempo.prototype.hideControls = function(_pageId){
    
    this.indicatorContainer.classList.add("off")
    this.indicatorContainerOff.classList.add("off")
    this.previousBtn.classList.add("off")
    this.nextBtn.classList.add("off")
}

linhaDoTempo.prototype.showControls = function(_pageId){

    this.indicatorContainer.classList.remove("off")
    this.indicatorContainerOff.classList.remove("off")
    this.previousBtn.classList.remove("off") 
    this.nextBtn.classList.remove("off")

}

//Header
//=============================
linhaDoTempo.prototype.openHeader = function(_pageId){

    console.log("open header");
    this.headerContainer.classList.remove("off")
    
    
}

linhaDoTempo.prototype.closeHeader = function(_pageId){

    console.log("close header");
    this.headerContainer.classList.add("off")

}

//creating elements
//=============================
linhaDoTempo.prototype.createDOMElements = function(){

    //containers
    this.appContainer = document.createElement('div')
    this.appContainer.className = "appContainer"
    document.body.appendChild(this.appContainer)

    this.pagesContainer = document.createElement('div')
    this.pagesContainer.className = "pagesContainer"
    this.pagesContainer.style.width = this.data.length * window.innerWidth
    this.appContainer.appendChild(this.pagesContainer)
    
    // interface elements
    this.nextBtn = document.createElement('div')
    this.nextBtn.className = "Btn next"
    this.appContainer.appendChild(this.nextBtn)
    this.nextBtn.addEventListener("touchstart", (en) =>{
        console.log(en.target);
        this.toNextPage()
    })
    
    this.previousBtn = document.createElement('div')
    this.previousBtn.className = "Btn previous"
    this.appContainer.appendChild(this.previousBtn)
    this.previousBtn.addEventListener("touchstart", (en) =>{
        console.log(en.target);
        this.toPreviousPage()
    })
    
    this.indicatorContainerOff = document.createElement('div')
    this.indicatorContainerOff.className = "indicatorContainer"
    this.appContainer.appendChild(this.indicatorContainerOff)
    
    this.indicatorContainer = document.createElement('div')
    this.indicatorContainer.className = "indicatorContainer"
    this.appContainer.appendChild(this.indicatorContainer)
    
    this.createPages()
    
    for (let index = 0; index < this.data.length; index++) {
        
        //indicators
        var indicatorSizes = {}
        indicatorSizes.padding = 10
        indicatorSizes.parentWidth = parseInt(window.getComputedStyle(this.indicatorContainer).width)
        indicatorSizes.width = (indicatorSizes.parentWidth - (this.data.length * indicatorSizes.padding - 1))/ this.data.length
        
        var indicator = document.createElement('div')
        indicator.className = "indicator"
        indicator.style.width = indicatorSizes.width 
        this.indicatorContainer.appendChild(indicator)
        this.indicators.push(indicator)
        if(index == this.currentPage){ indicator.classList.add("on") }
        
        var indicatorOff = document.createElement('div')
        indicatorOff.className = "indicatorBg"
        indicatorOff.style.width = indicatorSizes.width
        this.indicatorContainerOff.appendChild(indicatorOff)
        
    }
    
    //headers
    this.headerContainer = document.createElement('div')
    this.headerContainer.className = "headerContainer off"
    this.appContainer.appendChild(this.headerContainer)
    
    this.headerTitle = document.createElement('div')
    this.headerTitle.className = "headerTitle"
    this.headerContainer.appendChild(this.headerTitle)
    
    this.headerBtn = document.createElement('div')
    this.headerBtn.className = "headerBtn"
    this.headerContainer.appendChild(this.headerBtn)
    this.headerBtn.addEventListener("touchstart",()=>{
        this.pages[this.currentPage].showOverlay()
        this.showControls()
    })
    
}

linhaDoTempo.prototype.createPages = function(){
    
    // Create Pages
    for (let index = 0; index < this.data.length; index++) {
        console.log( "creating Pages..." );
        
        var contentData = this.data[index];
        console.log(contentData);

        var page = new Page(contentData)
        page.player.controls.addEventListener("toggleControls",(_e)=>{
            
            if(_e.menuOpen){
                this.openHeader()
            }else{
                this.closeHeader()
            }
    
        })
        page.id = index
        page.overlayCallback = ()=>{ this.hideControls() }

        page.container.style.backgroundColor = "rgb(" + index * 20 + "," + index * 20 + "," + index * 20 + ")"
        this.pagesContainer.appendChild(page.container)
        this.pages.push(page)

    }

}


//===============================================================
//===============================================================
//                             PAGES
//===============================================================
//===============================================================

function Page(_data){

    this.data = _data.video
    this.overlayCallback = ()=>{}
    this.overlayAnimationEnd = ()=>{}
    
    this.createDomElements()

}

Page.prototype.createDomElements = function(){

    //player  & container
    this.container = document.createElement('div')
    this.container.className = "page"
    this.container.style.width = window.outerWidth

    this.player = new simplePlayer(
        this.data.videoUrl,
        this.data.subtitles,
        this.data.title,this.container
    )
    this.player.id = this.id
    this.player.onloaded = () => { this.getVideoImage(this.player,this.overlayContainer,1) }


    //overlay
    this.overlayContainer = document.createElement('div')
    this.overlayContainer.className = "overlayContainer"
    this.container.appendChild(this.overlayContainer)
    this.overlayContainer.addEventListener("touchstart", (en) =>{
        this.hideOverLay()
        this.overlayCallback()
    })


    this.image = new Image()
    this.overlayContainer.appendChild(this.image)
    
    this.overlay = document.createElement('div')
    this.overlay.className = "overlay"
    this.overlayContainer.appendChild(this.overlay)
    this.overlay.addEventListener('webkitTransitionEnd', (e) => {    
        this.overlayAnimationEnd()
    })

    //overlay content
    var backGround = document.createElement('div')
    backGround.className = "overlayBG"
    this.overlay.appendChild(backGround)
    var title = document.createElement('div')
    title.className = "overlayTitle"
    title.innerHTML = this.data.title
    this.overlay.appendChild(title)
    var line = document.createElement('div')
    line.className = "overlayLine"
    this.overlay.appendChild(line)
    var iconText = document.createElement('div')
    iconText.className = "iconText"
    iconText.innerHTML = "Assistir"
    this.overlay.appendChild(iconText)
    var icon = document.createElement('div')
    icon.className = "overlayIcon"
    this.overlay.appendChild(icon)
    var left = document.createElement('div')
    left.className = "left"
    icon.appendChild(left)
    var right = document.createElement('div')
    right.className = "right"
    icon.appendChild(right)
    
    //Controlers
    this.controlersContainers = document.createElement('div')
    this.controlersContainers.className = "controlersContainers"
    this.container.appendChild(this.controlersContainers)

    this.closeBtn = document.createElement('div')
    this.closeBtn.className = "closeBtn"
    this.controlersContainers.appendChild(this.closeBtn)
    
    this.controlTitle = document.createElement('div')
    this.controlTitle.innerHTML = this.data.title
    this.controlTitle.className = "controlTitle"
    this.controlersContainers.appendChild(this.controlTitle)


}

Page.prototype.getVideoImage = function(_player,_imageContainer,scale){

    scale = scale || 1;

    const canvas = document.createElement("canvas");
    canvas.width = _player.video.clientWidth * scale;
    canvas.height = _player.video.clientHeight * scale;
    var context = canvas.getContext('2d')
    
    var getPixels = (__player) => {

        console.log("---");
        
        context.drawImage(_player.video, 0, 0, canvas.width, canvas.height);
        var pixels = context.getImageData(0,0,100,100).data
        

        if(pixels[0]==0 && pixels[0]==0){
            setTimeout(() => { getPixels()} , 1000)
        }else{
            
            this.image.src = canvas.toDataURL()
            this.image.className = "imagePreview"
            this.image.id = _player.id
            
            if(_player.id != 0 ) _player.toggleVisibility()
            _player.onloaded = () =>{}

        }

    }
    
    getPixels(_player)

}

Page.prototype.hideOverLay = function(_player,_imageContainer,scale){

    this.overlay.classList.add("off")

    this.overlayAnimationEnd = ()=>{
        this.overlayContainer.style.display = "none"
        this.player.toggleVisibility()
        this.player.controls.play()
        this.player.controls.openControls()
        this.overlayAnimationEnd = ()=>{
            console.log("fdgasfgafdg");
            
        }
    }
    
}

Page.prototype.showOverlay = function(_player,_imageContainer,scale){

    console.log("show overlay");
    
    this.player.controls.pause()
    this.player.controls.closeControls()

    this.overlayContainer.style.display = "block"
    setTimeout(()=>{
        this.overlay.classList.remove("off")

    },1)
    // this.overlay.addEventListener('webkitTransitionEnd', (e) => {    
    //     this.overlayContainer.style.display = "none"
    //     this.player.toggleVisibility()
    //     this.player.controls.play()
    //     this.player.controls.openControls()
    // })

}

//===============================================================
//===============================================================
//                             UTILS
//===============================================================
//===============================================================

function mod(n, m) {
    return ((n % m) + m) % m;
}

var cIndex = 0
var v = new linhaDoTempo(options.pages)

window.addEventListener("touchstart", (en) =>{
    console.log(en.target);
    
})