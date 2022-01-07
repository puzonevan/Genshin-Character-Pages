function zoomInView() {
    // var $window = $(window);
    // var bottom_of_window = $window.scrollTop() + $window.height();
    let bottomWindow = window.screenTop + window.outerHeight

    
    let randomQuote = document.getElementById("randomQuote");
    let bottomObject = randomQuote.position.top + randomQuote.outerHeight;

    if(bottomWindow > bottomObject){
        randomQuote.setAttribute("class", `${randomQuote.className} zoomIn`);
    }
    // $('#randomQuote').each(function(i) {
    //   var $that = $(this);
    //   var bottom_of_object = $that.position().top + $that.outerHeight();
  
    //   //if element is in viewport, add the animate class
    //   if (bottom_of_window > bottom_of_object) {
    //     $(this).addClass('zoomIn');
    //   }
    // });
  }

zoomInView();

window.addEventListener("scroll", () =>{
    zoomInView();
});

