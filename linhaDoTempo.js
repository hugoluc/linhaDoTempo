var cIndex = 0
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
        {     
            type : "content",
            video : {
                title : "Em cartaz: <br> Os Romanos no cinema",
                description : 'Passados 2 mil anos, o Império Romano ainda nos interessa. Mesmo extinto, ele continua vivo em nosso imaginário. Seu incrível poderio, suas guerras brutas, suas intrigas políticas, tudo nos fascina em sua história remota. Julio César, por exemplo, é re-assassinado todos os anos em algum ponto do planeta, numa encenação da peça de William Shakespeare. \n \n E o cinema de Hollywood continua apaixonado pelo tema. Mesmo já tendo realizado dezenas de filmes como Spartacus ou Gladiador, a cada poucos anos surge uma nova superprodução do gênero. Os antigos romanos ainda garantem uma boa bilheteria.\n \n E o cinema de Hollywood continua apaixonado pelo tema. Mesmo já tendo realizado dezenas de filmes como Spartacus ou Gladiador, a cada poucos anos surge uma nova superprodução do gênero. Os antigos romanos ainda garantem uma boa bilheteria.',
                images : [
                    { 
                        url : 'content/' + cIndex + '/0.png' ,
                        title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                        cover : true
                    },
                    { 
                        url : 'content/' + cIndex + '/1.png' ,
                        title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                        cover : false
                    },
                    { 
                        url : 'content/' + cIndex + '/2.png' ,
                        title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                        cover : false
                    }
                ]
            }
            
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
        this.goToPage(this.data.length-1)
        setTimeout( ()=> {this.goToPage(0)},500)

    },500)

    window.addEventListener("touchstart", (en) =>{
        this.handleSwipe(en,false)
    })

    window.addEventListener("touchmove", (en) =>{
        this.dragPos = en.changedTouches[0].pageX
        this.handleSwipe(en,true)
    })
    
    window.addEventListener("touchend", (en) =>{
        this.dragPos = en.changedTouches[0].pageX
        this.handleSwipe(en,false)
    })


}

//controleers functions
//=============================
linhaDoTempo.prototype.toNextPage = function(){
    this.goToPage(mod(this.currentPage + 1,this.data.length))
}

linhaDoTempo.prototype.toPreviousPage = function(){
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
    this.nextBtn.innerHTML = '<div class="btnIcon"></div>'
    this.nextBtn.className = "Btn next"
    this.appContainer.appendChild(this.nextBtn)
    this.nextBtn.addEventListener("touchstart", (en) =>{
        console.log(en.target);
        this.toNextPage()
    })
    
    this.previousBtn = document.createElement('div')
    this.previousBtn.innerHTML = '<div class="btnIcon"></div>'
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
    
    this.headerBg = document.createElement('div')
    this.headerBg.className = "headerBg"
    this.headerContainer.appendChild(this.headerBg)

    this.headerTitle = document.createElement('div')
    this.headerTitle.className = "headerTitle"
    this.headerContainer.appendChild(this.headerTitle)
    
    this.headerBtn = document.createElement('div')
    this.headerBtn.innerHTML = '<img src="icons/exit.png" class="exitIcon">'
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
        
        var pageData = this.data[index];

        if(pageData.type == "content"){
            var page = new ContentPage(pageData)
            page.openMenu = ()=>{ this.headerContainer.style.display = "none"; this.hideControls(); }
            page.closeMenu = () =>{ this.headerContainer.style.display = "block" ; this.showControls(); }
        }else{
            var page = new Page(pageData)
            page.player.controls.addEventListener("toggleControls",(_e)=>{ if(_e.menuOpen){ this.openHeader() }else{ this.closeHeader() } })
            page.overlayCallback = ()=>{ this.hideControls() }
        }

        page.id = index
        page.container.style.backgroundColor = "rgb(" + index * 20 + "," + index * 20 + "," + index * 20 + ")"
        this.pagesContainer.appendChild(page.container)
        this.pages.push(page)

    }

}

linhaDoTempo.prototype.handleSwipe = function(_event,_move){

    console.log("--------------");
    console.log(_event.type,_move);
    this.dragMove = _move
    



}

linhaDoTempo.prototype.carrousellMoveTo = function(_event,_move){



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

    
    this.overlay = document.createElement('div')
    this.overlay.className = "overlay"
    this.overlayContainer.appendChild(this.overlay)
    this.overlay.addEventListener('webkitTransitionEnd', (e) => {    
        this.overlayAnimationEnd()
    })

    this.image = new Image()
    this.overlay.appendChild(this.image)

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
    
    var overlayIconContainer = document.createElement('div')
    overlayIconContainer.className = "overlayIconContaine"
    overlayIconContainer.addEventListener("touchend", (en) =>{
        this.hideOverLay()
        this.overlayCallback()
    })
    this.overlay.appendChild(overlayIconContainer)

    var iconText = document.createElement('div')
    iconText.className = "iconText"
    iconText.innerHTML = "Assistir"
    overlayIconContainer.appendChild(iconText)
    
    var icon = document.createElement('div')
    icon.className = "overlayIcon"
    overlayIconContainer.appendChild(icon)
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

    console.log("hide overlay");
    

    this.overlay.classList.add("off")
    this.player.toggleVisibility()

    this.overlayAnimationEnd = ()=>{
        this.overlayContainer.style.display = "none"
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
    this.player.toggleVisibility()
    this.overlayContainer.style.display = "block"
    setTimeout(()=>{
        this.overlay.classList.remove("off")

    },1)

}

//===============================================================
//===============================================================
//                        CONTENT PAGES
//===============================================================
//===============================================================

function ContentPage(_data){

    this.iconUp = false
    this.clicked = false
    this.scrollTrashHold = 1250
    this.data = _data.video
    this.images = []
    this.openMenu = ()=>{}
    this.closeMenu = ()=>{}

    for(var i = 0; i < this.data.images.length; i++){
        
        console.log(this.data.images[i]);
        
        if(this.data.images[i].cover){
            this.cover = this.data.images[i]
        }else{
            this.images.push(this.data.images[i])
        }
        
    }
    
    this.createDomElements()
}

ContentPage.prototype.createDomElements = function(){

    //player  & container
    this.container = document.createElement('div')
    this.container.className = "page"
    this.container.style.width = window.outerWidth

    //overlay
    this.overlayContainer = document.createElement('div')
    this.overlayContainer.className = "overlayContainer"
    this.container.appendChild(this.overlayContainer)
    
    this.overlay = document.createElement('div')
    this.overlay.className = "overlay"
    this.overlayContainer.appendChild(this.overlay)
    this.overlay.addEventListener('webkitTransitionEnd', (e) => { this.overlayAnimationEnd() })

    this.image = document.createElement('div')
    this.image.style.backgroundImage = "url(" + this.cover.url + ")"
    this.image.className = "imagePreview content"
    this.overlay.appendChild(this.image)

    //overlay content
    var backGround = document.createElement('div')
    backGround.className = "overlayBG"
    this.overlay.appendChild(backGround)

    this.createContentDom()

    //controls
    this.bottomBar = document.createElement('div')
    this.bottomBar.className = "bottomBar"
    this.container.appendChild(this.bottomBar)
    this.bottomBar.addEventListener("touchstart", () => {

        this.clicked = true

        if(this.contentContainer.scrollTop < this.scrollTrashHold){
            this.changeIconUp()
            this.contentContainer.scrollTo(0,this.scrollTrashHold)
        }else{        
            this.changeIconDown()
            this.contentContainer.scrollTo(0,0)
        }

    })
    
    this.botomBarIcon = document.createElement('img')
    this.botomBarIcon.className = "botomBarIcon"
    this.botomBarIcon.src = "icons/botomBarIcon.png"

    this.bottomBar.append(this.botomBarIcon)
    
    this.bootomBartext = document.createElement('div')
    this.bootomBartext.className = "bootomBartext"
    this.bootomBartext.innerHTML = "voltar para o topo"
    this.bottomBar.append(this.bootomBartext)
    
    //closebtn
    this.closeBtn = document.createElement('div')
    this.closeBtn.innerHTML = '<img src="icons/exit.png" class="exitIcon">'
    this.closeBtn.className = "closeBtn"
    this.container.appendChild(this.closeBtn)
    this.closeBtn.addEventListener("touchend", () => {
        this.close()
    })


}

ContentPage.prototype.changeIconUp = function(_imageData){

    if(!this.iconUp){
        this.iconUp = true
        this.bottomBar.classList.add("up")
    }

}

ContentPage.prototype.changeIconDown = function(_imageData){

    if(this.iconUp){
        this.iconUp = false
        this.bottomBar.classList.remove("up")
    }

}

ContentPage.prototype.scrollHandler = function(_imageData){

    if(this.clicked){
        if(this.contentContainer.scrollTop == this.scrollTrashHold || this.contentContainer.scrollTop == 0 ){
            this.clicked = false
        }
    }else{
        if(this.contentContainer.scrollTop >= this.scrollTrashHold){
            this.changeIconUp()
        }else{
            this.changeIconDown()    
        }
    }

}

ContentPage.prototype.createContentDom = function(_imageData){

    //content
    this.contentBackground = document.createElement('div')
    this.contentBackground.className = "contentBackground"
    this.container.appendChild(this.contentBackground)

    this.contentContainer = document.createElement('div')
    this.contentContainer.className = "contentContainer"
    this.container.appendChild(this.contentContainer)
    this.contentContainer.addEventListener("scroll",()=>{ this.scrollHandler() })

    //header
    this.headerContet = document.createElement('div')
    this.headerContet.className = "headerContet"
    this.contentContainer.appendChild(this.headerContet)

    //text
    this.textConainer = document.createElement('div')
    this.textConainer.className = "textConainer"
    this.headerContet.appendChild(this.textConainer)

    this.contentTitle = document.createElement('div')
    this.contentTitle.className = "overlayTitle"
    this.contentTitle.innerHTML = this.data.title
    this.textConainer.appendChild(this.contentTitle)

    this.contentlLine = document.createElement('div')
    this.contentlLine.className = "overlayLine"
    this.textConainer.appendChild(this.contentlLine)

    this.contentText = document.createElement('div')
    this.contentText.className = "contentText"
    this.contentText.innerText = this.data.description.split("\n")[0].slice(0,260) + "..."
    this.textConainer.appendChild(this.contentText)

    this.contentOpen = document.createElement('div')
    this.contentOpen.className = "contentOpen"
    this.contentOpen.innerText = "Ver mais"
    this.contentOpen.addEventListener("touchstart", (en) => { this.open() })
    this.textConainer.appendChild(this.contentOpen)
    
    //body
    this.bodyContet = document.createElement('div')
    this.bodyContet.className = "bodyContet"
    this.contentContainer.appendChild(this.bodyContet)

    
    //images
    for (let index = 0; index < this.data.images.length; index++) {
        this.createImageBlocks(this.data.images[index])
    }
    
}

ContentPage.prototype.createImageBlocks = function(_imageData){

    var container = document.createElement('div')
    container.className = "contentImageContainer"
    if(_imageData.cover){ 
        this.headerContet.appendChild(container)
        container.classList.add("cover")
    }else{ 
        this.bodyContet.appendChild(container) 
    }

    var image = document.createElement('img')
    image.className = "image"
    // image.style.backgroundImage = "url(" + _imageData.url + ")"
    image.src =  _imageData.url
    container.appendChild(image)
    
    var legend = document.createElement('div')
    legend.className = "legend"
    legend.innerText = _imageData.title
    container.appendChild(legend)

}

ContentPage.prototype.open = function(){
    
    this.contentText.innerText = this.data.description
    this.openMenu()
    this.contentBackground.classList.add("open")
    this.textConainer.classList.add("open")
    this.container.classList.add("open")
    
}

ContentPage.prototype.close = function(){
    
    this.contentText.innerText = this.data.description.split("\n")[0].slice(0,260) + "..."
    this.contentBackground.classList.remove("open")
    this.textConainer.classList.remove("open")
    this.container.classList.remove("open")
    setTimeout(()=>{
        this.closeMenu()

    },1)
    
}

//===============================================================
//===============================================================
//                             UTILS
//===============================================================
//===============================================================

function mod(n, m) {
    return ((n % m) + m) % m;
}

var v = new linhaDoTempo(options.pages)

window.addEventListener("touchstart", (en) =>{
    console.log(en.target);
    
})