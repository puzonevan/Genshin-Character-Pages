
// Get Gif from Dom 
const gif = document.getElementById("menuImage");

// Get Anchors from Dom 
const materialsAnchor = document.getElementById("materialsAnchor");
const buildsAnchor = document.getElementById("buildsAnchor");
const combatAnchor = document.getElementById("combatAnchor");
const backgroundAnchor = document.getElementById("backgroundAnchor");
const artworkAnchor = document.getElementById("artworkAnchor");

// Open variable for state 
let open = false;

// Open or close menu on image click; 
gif.addEventListener("click", () =>{

    // if open, then close
    if(open){
        materialsAnchor.style.zIndex = "4";
        buildsAnchor.style.zIndex = "4";
        combatAnchor.style.zIndex = "4";
        backgroundAnchor.style.zIndex = "4";
        artworkAnchor.style.zIndex = "4";

        materialsAnchor.style.opacity = "0";
        buildsAnchor.style.opacity = "0";
        combatAnchor.style.opacity = "0";
        backgroundAnchor.style.opacity = "0";
        artworkAnchor.style.opacity = "0";

        materialsAnchor.style.transform = "translateY(0)";
        buildsAnchor.style.transform = "translateY(0)";
        combatAnchor.style.transform = "translateY(0)";
        backgroundAnchor.style.transform = "translateY(0)";
        artworkAnchor.style.transform = "translateY(0)";
        open = false;
    }
    // otherwise, open
    else{
        materialsAnchor.style.zIndex = "6";
        buildsAnchor.style.zIndex = "6";
        combatAnchor.style.zIndex = "6";
        backgroundAnchor.style.zIndex = "6";
        artworkAnchor.style.zIndex = "6";

        materialsAnchor.style.opacity = "1";
        buildsAnchor.style.opacity = "1";
        combatAnchor.style.opacity = "1";
        backgroundAnchor.style.opacity = "1";
        artworkAnchor.style.opacity = "1";

        materialsAnchor.style.transform = "translateY(-300px)";
        buildsAnchor.style.transform = "translateY(-250px)";
        combatAnchor.style.transform = "translateY(-200px)";
        backgroundAnchor.style.transform = "translateY(-150px)";
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

backgroundAnchor.addEventListener("click", () =>{
    document.getElementById("lore-section").scrollIntoView({
        behavior: "smooth"
    });
});

artworkAnchor.addEventListener("click", () =>{
    document.getElementById("art-section").scrollIntoView({
        behavior: "smooth"
    });
});