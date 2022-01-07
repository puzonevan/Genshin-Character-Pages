function zoomInView(){
    let bottomWindow = $(window).scrollTop
}

zoomInView();

window.addEventListener("scroll", () =>{
    zoomInView();
});