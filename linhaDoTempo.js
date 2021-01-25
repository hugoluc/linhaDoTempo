var EXP_ID = new URLSearchParams(window.location.search).get("id");
var options = data[EXP_ID-1]

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
    this.open = false
    this.pages = []
    this.carrousellPos = this.getCarrousellPos(_data.length)
    this.createDOMElements()
    this.setCarrousellPosIds()
    this.scollCounter = 0
    setTimeout( ()=> {
        this.goToPage(this.data.length-1)
        setTimeout( ()=> {this.goToPage(0)},1000)
    },1000)

    window.addEventListener("touchstart", (en) =>{
        this.firstDragPos = en.changedTouches[0].pageX
        this.dragPos = en.changedTouches[0].pageX
        this.dragMove = false
    })

    window.addEventListener("touchmove", (en) =>{
        if(this.open) return
        this.dragMove = true
        this.dragPos = en.changedTouches[0].pageX
        this.dragPage()
    })
    
    window.addEventListener("touchend", (en) =>{
        this.dragPos = en.changedTouches[0].pageX
        this.handleSwipe(en)
        this.dragMove = false
    })


}

//controleers functions
//=============================
linhaDoTempo.prototype.toNextPage = function(){
    this.carrousellNext()
}

linhaDoTempo.prototype.toPreviousPage = function(){
    this.carrousellPrevious()
}

linhaDoTempo.prototype.goToPage = function(_pageId){

    var diff = _pageId - this.currentPage
    if(diff == 0 ){
        return 
    }else if(diff > 0){
        while(diff > 0){
            diff--
            this.toNextPage()
        }
    }else{
        while(diff < 0){
            diff++
            this.toPreviousPage()
        }
    }

    return

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

//Carrousell
//=============================

linhaDoTempo.prototype.carrousellMove = function(_pageId){

    //adjust overlaty position setting the current page and next page up front
    for (let index = 0; index < this.pages.length; index++) {
        if(index == this.currentPage || index == _pageId){
            this.pages[index].container.style.zIndex = "2"
        }else{
            this.pages[index].container.style.zIndex = "1"
        }
    }


    //next page
    if( this.currentPage - _pageId == -1 || this.currentPage - _pageId == this.data.length-1 ){
        
        this.indicators[this.currentPage].classList.add("right")
        this.indicators[this.currentPage].classList.remove("on")
        this.indicators[_pageId].classList.add("on")
        this.indicators[_pageId].classList.remove("right")

    //previous page
    }else{
       
        this.indicators[this.currentPage].classList.remove("right")
        this.indicators[this.currentPage].classList.remove("on")
        this.indicators[_pageId].classList.add("on")
        this.indicators[_pageId].classList.add("right")
    }
    
    this.currentPage = _pageId
    this.headerTitle.innerHTML = this.pages[this.currentPage].data.title

}

linhaDoTempo.prototype.getCarrousellPos = function(_length){
    
    var inicialIndex = Math.ceil((_length/2)-1) // 2
    var width = 1920
    var positions = []

    for (let index = 0; index < _length; index++) {
        positions[index] = (index - inicialIndex) * width
    }

    return positions

}

linhaDoTempo.prototype.setCarrousellPosIds = function(){
    var _length = this.pages.length
    var inicialIndex = Math.ceil((_length/2)-1) 

    for (let index = 0; index < _length; index++) {
        
        this.pages[index].posId = (index + inicialIndex) % _length
        this.pages[index].setPos(this.carrousellPos[this.pages[index].posId])
    }

}

linhaDoTempo.prototype.carrousellNext = function(){
    
    this.carrousellMove(mod(this.currentPage + 1,this.data.length))

    var len = this.pages.length

    for (let index = 0; index < len; index++) {

        this.pages[index].posId = ((this.pages[index].posId - 1) + len) % len
        this.pages[index].container.setAttribute('posId', this.pages[index].posId)
        var posX = this.carrousellPos[ this.pages[index].posId]
        this.pages[index].setPos(posX,true)
        
    }


}

linhaDoTempo.prototype.carrousellPrevious = function(){
    
    this.carrousellMove(mod(this.currentPage - 1,this.data.length))

    var len = this.pages.length

    for (let index = 0; index < len; index++) {
        this.pages[index].posId = (this.pages[index].posId+1) % len
        var posX = this.carrousellPos[ this.pages[index].posId]
        this.pages[index].setPos(posX,true)
    }

}

linhaDoTempo.prototype.getPagePosId = function(_index,_length){
    
    var inicialIndex = Math.ceil((_length/2)-1)
    return (_index + (_length - inicialIndex)) % _length 

}

linhaDoTempo.prototype.dragPage = function(posX){

    var dif = this.firstDragPos - this.dragPos
    for (let index = 0; index < this.pages.length; index++) {
        
        //origin
        var origin = this.carrousellPos[this.pages[index].posId]
        
        //destination
        var dest = origin - dif 
        
        //grande
        this.pages[index].setPos(dest)
        
    }

}

linhaDoTempo.prototype.handleSwipe = function(_event){

    var dif = this.firstDragPos - this.dragPos

    if(this.dragMove && !this.open){
        if(dif > 0){
            this.carrousellNext()
        }else{
            this.carrousellPrevious()
        }
    }
    
}

//Header
//=============================
linhaDoTempo.prototype.openHeader = function(_pageId){

    this.headerContainer.classList.remove("off")    
    
}

linhaDoTempo.prototype.closeHeader = function(_pageId){

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
    this.nextBtn.addEventListener("touchend", (en) =>{ 
        if(!this.dragMove)  this.toNextPage() 
    })

    this.previousBtn = document.createElement('div')
    this.previousBtn.innerHTML = '<div class="btnIcon"></div>'
    this.previousBtn.className = "Btn previous"
    this.appContainer.appendChild(this.previousBtn)
    this.previousBtn.addEventListener("touchend", (en) =>{
        if(!this.dragMove) this.toPreviousPage()
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
        //ndicatorSizes.parentWidth = parseInt(window.getComputedStyle(this.indicatorContainer).width)
        //indicatorSizes.width = "30px" (indicatorSizes.parentWidth - (this.data.length * indicatorSizes.padding - 1))/ this.data.length
        

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
    this.headerBtn.addEventListener("touchend",()=>{
        this.close()
    })
    
}

linhaDoTempo.prototype.resetAllVideos = function(){

    for (let index = 0; index < this.pages.length; index++) {
        var page = this.pages[index];
        if(page.type == "video"){
            page.player.controls.setCurrentTime(0)
        }
        
    }
}

linhaDoTempo.prototype.close = function(){
    
    console.log("-----------")
    console.log(this.open)

    if(this.open){
        
        if(this.pages[this.currentPage].type == "video"){
            this.pages[this.currentPage].showOverlay()
            this.showControls()
        }else{
            this.pages[this.currentPage].close()   
        }

        this.open = false
    }

}

linhaDoTempo.prototype.createPages = function(){

    // Create Pages
    for (let index = 0; index < this.data.length; index++) {
        
        var pageData = this.data[index];

        if(pageData.type == "content"){
            var page = new ContentPage(pageData,index)
            page.openMenu = ()=>{ 
                this.open = true
                this.headerContainer.style.display = "none"; 
                this.hideControls(); 
            }
            page.closeMenu = () =>{ 
                this.open = false
                this.headerContainer.style.display = "block"; 
                this.showControls(); 
            }
            page.getScroll =  () =>{ return this.dragMove }

        }else{
            var page = new Page(pageData,index)
            page.player.controls.addEventListener("toggleControls",(_e)=>{ if(_e.menuOpen){ this.openHeader() }else{ this.closeHeader() } })
            page.overlayCallback = ()=>{ 
                this.open = true
                this.hideControls() 
            }
            page.getScroll =  () =>{ return this.dragMove }
        }

        page.type = pageData.type
        page.container.style.backgroundColor = "rgb(" + index * 20 + "," + index * 20 + "," + index * 20 + ")"
        this.pagesContainer.appendChild(page.container)
        this.pages.push(page)

    }

}

linhaDoTempo.prototype.playing = function(){

    var page = this.pages[this.currentPage]
    
    if(page.type == "video"){
        return page.player.video.playing
    }

}

//===============================================================
//===============================================================
//                             PAGES
//===============================================================
//===============================================================

function Page(_data,_id){

    this.id = _id
    this.data = _data.video
    this.overlayCallback = ()=>{}
    this.overlayAnimationEnd = ()=>{}
    this.isOpend = false
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

    var backGround = document.createElement('div')
    backGround.className = "overlayBG"
    this.overlay.appendChild(backGround)

    //overlay content
    var overlayContent = document.createElement('div')
    overlayContent.className = "overlayContent"
    this.overlay.appendChild(overlayContent)
    
    var title = document.createElement('div')
    title.className = "overlayTitle"
    title.innerHTML = this.data.title
    overlayContent.appendChild(title)

    var subTitle = document.createElement('div')
    subTitle.className = "overlaySubTitle"
    subTitle.innerHTML = this.data.subTitle
    overlayContent.appendChild(subTitle)

    var line = document.createElement('div')
    line.className = "overlayLine"
    overlayContent.appendChild(line)
    
    var overlayIconContainer = document.createElement('div')
    overlayIconContainer.className = "overlayIconContaine"
    overlayIconContainer.addEventListener("touchend", (en) =>{
        if(!this.getScroll()){
            this.hideOverLay()
            this.overlayCallback()
        }
    })
    overlayContent.appendChild(overlayIconContainer)

    //----------

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
        
        _player.controls.setCurrentTime(0.9)
        context.drawImage(_player.video, 0, 0, canvas.width, canvas.height);
        var pixels = context.getImageData(0,0,100,100).data
        
        if(pixels[0]==0 && pixels[0]==0){
            setTimeout(() => { getPixels()} , 1000)
        }else{
            
            this.image.src = canvas.toDataURL()
            this.image.className = "imagePreview"
            this.image.id = _player.id
            
            _player.toggleVisibility()
            _player.controls.setCurrentTime(0.0)
            _player.onloaded = () =>{}

        }

    }
    
    getPixels(_player)

}

Page.prototype.hideOverLay = function(_player,_imageContainer,scale){
    
    if(this.isOpend) return
    this.isOpend = true
    
    this.overlay.classList.add("off")
    this.player.toggleVisibility()
    
    this.overlayAnimationEnd = ()=>{
        this.overlayContainer.style.display = "none"
        this.player.controls.play()
        this.overlayAnimationEnd = ()=>{}
    }
}

Page.prototype.showOverlay = function(_player,_imageContainer,scale){
    
    if(!this.isOpend) return
    this.isOpend = false
    
    this.player.controls.pause()
    this.player.controls.closeControls()
    this.player.toggleVisibility()
    this.overlayContainer.style.display = "block"
    setTimeout(()=>{
        this.overlay.classList.remove("off")
    },1)

}

Page.prototype.setPos = function(_pos,_animate){

    
    if(_animate){
        this.container.style.transition = "transform 500ms"
    }else{
        this.container.style.transition = ""
    }
    this.container.style.transform = "translateX(" + _pos +  "px)"

}

//===============================================================
//===============================================================
//                        CONTENT PAGES
//===============================================================
//===============================================================

function ContentPage(_data, _id){
    
    this.isOpend = false
    this.id = _id
    this.iconUp = false
    this.clicked = false
    this.scrollTrashHold = 1250
    this.data = _data.video
    this.images = []
    this.openMenu = ()=>{}
    this.closeMenu = ()=>{}

    for(var i = 0; i < this.data.images.length; i++){
        
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
    this.bottomBar.addEventListener("touchend", () => {

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
    this.contentText.innerText = this.data.description.split("\n")[0].slice(0,200) + "..."
    this.textConainer.appendChild(this.contentText)

    this.contentOpen = document.createElement('div')
    this.contentOpen.className = "contentOpen"
    this.contentOpen.innerText = "Ver mais"
    this.contentOpen.addEventListener("touchend", (en) => { if(!this.getScroll()) this.open() })
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
    this.isOpend = true
    
}

ContentPage.prototype.close = function(){
    
    this.contentText.innerText = this.data.description.split("\n")[0].slice(0,260) + "..."
    this.contentBackground.classList.remove("open")
    this.textConainer.classList.remove("open")
    this.container.classList.remove("open")
    setTimeout(()=>{ 
        this.closeMenu() 
        this.isOpend = false
    },1)
    
}

ContentPage.prototype.setPos = function(_pos,_animate){
    
    if(_animate){
        this.container.style.transition = "transform 500ms"
    }else{
        this.container.style.transition = ""
    }
    this.container.style.transform = "translateX(" + _pos +  "px)"

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

//click debug
// window.addEventListener("touchstart", (en) =>{
    // console.log(en.target);
// })

//TIMEOUT
var currentPage;
var timeOut;
setTimer()

document.addEventListener("touchstart", ()=>{ resetTimer() })
function setTimer(){ timeOut = setTimeout( resetAll, 180000) }

function resetTimer() {
  clearTimeout(timeOut);
  setTimer()
} 


function resetAll(){

    if(!v.playing()){
        v.close()
        v.goToPage(0)
        v.resetAllVideos()
    }
}

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})