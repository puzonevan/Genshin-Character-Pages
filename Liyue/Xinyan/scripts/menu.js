
// Get Gif from Dom 
const gif = document.getElementById("menu-gif");
const gifImage = "./Xinyan/gifs/xinyangif.gif";

// Get Anchors from Dom 
const materialsAnchor = document.getElementById("materials-anchor");
const buildsAnchor = document.getElementById("builds-anchor");
const combatAnchor = document.getElementById("combat-anchor");
const artworkAnchor = document.getElementById("artwork-anchor");

// Open variable for state 
let open = false;

// Change the gif 

gif.firstElementChild.setAttribute("src", gifImage);
gif.firstElementChild.setAttribute("alt", "character gif");

// Open or close menu on image click; 
gif.addEventListener("click", () =>{

    // if open, then close
    if(open){
        materialsAnchor.style.zIndex = "4";
        buildsAnchor.style.zIndex = "4";
        combatAnchor.style.zIndex = "4";
        artworkAnchor.style.zIndex = "4";

        materialsAnchor.style.opacity = "0";
        buildsAnchor.style.opacity = "0";
        combatAnchor.style.opacity = "0";
        artworkAnchor.style.opacity = "0";

        materialsAnchor.style.transform = "translateY(0)";
        buildsAnchor.style.transform = "translateY(0)";
        combatAnchor.style.transform = "translateY(0)";
        artworkAnchor.style.transform = "translateY(0)";
        open = false;
    }
    // otherwise, open
    else{
        materialsAnchor.style.zIndex = "6";
        buildsAnchor.style.zIndex = "6";
        combatAnchor.style.zIndex = "6";
        artworkAnchor.style.zIndex = "6";

        materialsAnchor.style.opacity = "1";
        buildsAnchor.style.opacity = "1";
        combatAnchor.style.opacity = "1";
        artworkAnchor.style.opacity = "1";

        materialsAnchor.style.transform = "translateY(-400px)";
        buildsAnchor.style.transform = "translateY(-300px)";
        combatAnchor.style.transform = "translateY(-200px)";
        artworkAnchor.style.transform = "translateY(-100px)";
        open = true;
    }
    
});


materialsAnchor.addEventListener("click", () =>{
    document.getElementById("talents-ascension").scrollIntoView({
        behavior: "smooth"
    });
});

buildsAnchor.addEventListener("click", () =>{
    document.getElementById("build-section").scrollIntoView({
        behavior: "smooth"
    });
});

combatAnchor.addEventListener("click", () =>{
    document.getElementById("combat-section").scrollIntoView({
        behavior: "smooth"
    });
});

artworkAnchor.addEventListener("click", () =>{
    document.getElementById("art-section").scrollIntoView({
        behavior: "smooth"
    });
});