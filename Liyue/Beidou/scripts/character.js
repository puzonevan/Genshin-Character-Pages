// Change variables below for different characters 
// DO NOT CHANGE AMOUNTS FOR MATERIALS
const name = "beidou";

///////////////////////////////////////////////////////////////////////

/****** CHARACTER MATERIAL VARIABLES *******/
const stones = ["vajradaamethystsliver", "vajradaamethystfragment", "vajradaamethystchunk", "vajradaamethystgemstone", "noctilucousjade"];
const stoneAmounts = [1, 9, 9, 6, 168];
const collectable = ["treasurehoarderinsignia", "silverraveninsignia", "goldenraveninsignia"];
const collectableAmounts = [18, 30, 36, 18, 66, 93];
const uniqueCollectable = "lightningprism";
const uniqueCollectableAmounts = 46;
const books = ["teachingsofgold", "guidetogold", "philosophiesofgold"];
const booksAmounts = [9, 65, 114];
const boss = "dvalinssigh";
const bossAmounts = 18;
const crown = "crownofinsight";
const crownAmounts = 3;

///////////////////////////////////////////////////////////////////////

/****** CHARACTER ARTIFACTS & WEAPONS *******/
const build1 = {
    title: "", 
    description: "",
    weapons: [],
    artifacts: [],
}
const build2 = {
    title: "", 
    description: "",
    weapons: [],
    artifacts: [],
}

///////////////////////////////////////////////////////////////////////

/****** TALENTS & CONSTELLATIONS *******/
// const abilities;
// const constellations;

///////////////////////////////////////////////////////////////////////

/****** FETCH DATA VARIABLES *******/
let genshindb = {};
let genshinimage = {};
let genshinlink = {};

window.addEventListener("DOMContentLoaded", init);

///////////////////////////////////////////////////////////////////////

/****** ASYNC INIT FUNCTIONS *******/

async function init(){
    let waitData = await fetchData();
    let waitImage = await fetchImage();
    let waitLink = await fetchLink();

    if(!waitData || !waitImage || !waitLink){
        console.log("Data Fetch Unsuccesful");
        return;
    }

    initializeMaterials();
    initializeArtifacts();
    initializeWeapons();
}

///////////////////////////////////////////////////////////////////////

/****** FETCH FUNCTIONS *******/
async function fetchData(){
    return new Promise((resolve, reject) =>{
        fetch("../../../min/data.min.json")
        .then(response => response.json())
        .then(data =>{
            genshindb = data["English"];
            resolve(true);
        })
        .catch((error) => reject(false));
    });
}

async function fetchImage(){
    return new Promise((resolve, reject) =>{
        fetch("../../../min/image.min.json")
        .then(response => response.json())
        .then(data =>{
            genshinimage = data;
            resolve(true);
        })
        .catch((error) => reject(false));
    })
}

async function fetchLink(){
    return new Promise((resolve, reject) =>{
        fetch("../../../min/url.min.json")
        .then(response => response.json())
        .then(data =>{
            genshinlink = data;
            resolve(true);
        })
        .catch((error) => reject(false));
    });
}

///////////////////////////////////////////////////////////////////////

/****** INITIALIZE DATA FUNCTIONS *******/
function initializeMaterials(){
    
    console.log(genshindb);
    console.log(genshinimage);
    console.log(genshinlink);

    // Change Character Title 
    document.getElementById("character-name").innerHTML = genshindb["characters"][`${name}`]["name"];

    // Change Character Splash in Materials
    document.getElementById("character-splash").firstElementChild.src = genshinimage["characters"][`${name}`]["portrait"];

    // Change Stone Materials 
    [...document.getElementsByClassName("stone")].forEach((stone, index) =>{
        stone.innerHTML = `${genshindb["materials"][stones[index]]["name"]} <strong>x${stoneAmounts[index]}</strong>`;
        stone.previousElementSibling.src = `${genshinimage["materials"][stones[index]]["fandom"]}`;

        stone.previousElementSibling.addEventListener('click', () =>{
            window.open(genshinlink["materials"][stones[index]]["fandom"], "_blank");
        });

        hover(stone.previousElementSibling);
    });

    // Change Collectable Materials
    [...document.getElementsByClassName("collectable")].forEach((collect, index) =>{
        if(index < 3){
            collect.innerHTML = `${genshindb["materials"][collectable[index]]["name"]} <strong>x${collectableAmounts[index]}</strong>`;
            collect.previousElementSibling.src = `${genshinimage["materials"][collectable[index]]["fandom"]}`;
            collect.previousElementSibling.addEventListener('click', () =>{
                window.open(genshinlink["materials"][collectable[index]]["fandom"], "_blank");
            });
        } else{
            collect.innerHTML = `${genshindb["materials"][collectable[index - 3]]["name"]} <strong>x${collectableAmounts[index]}</strong>`;
            collect.previousElementSibling.src = `${genshinimage["materials"][collectable[index - 3]]["fandom"]}`;
            collect.previousElementSibling.addEventListener('click', () =>{
                window.open(genshinlink["materials"][collectable[index - 3]]["fandom"], "_blank");
            });
        }
        
        hover(collect.previousElementSibling);
    });

    // Change Unique Collectable Materials
    [...document.getElementsByClassName("unique-collectable")].forEach((unique) =>{
        unique.innerHTML = `${genshindb["materials"][uniqueCollectable]["name"]} <strong>x${uniqueCollectableAmounts}</strong>`;
        unique.previousElementSibling.src = `${genshinimage["materials"][uniqueCollectable]["fandom"]}`;

        unique.previousElementSibling.addEventListener('click', () =>{
            window.open(genshinlink["materials"][uniqueCollectable]["fandom"], "_blank");
        });
        hover(unique.previousElementSibling);
    });

    // Change Book Materials
    [...document.getElementsByClassName("book")].forEach((book, index) =>{
        book.innerHTML = `${genshindb["materials"][books[index]]["name"]} <strong>x${booksAmounts[index]}</strong>`;
        book.previousElementSibling.src = `${genshinimage["materials"][books[index]]["fandom"]}`;

        book.previousElementSibling.addEventListener('click', () =>{
            window.open(genshinlink["materials"][books[index]]["fandom"], "_blank");
        });
        hover(book.previousElementSibling);
    });
    
    // Change Boss Materials
    [...document.getElementsByClassName("boss")].forEach((bossDOM) =>{
        bossDOM.innerHTML = `${genshindb["materials"][boss]["name"]} <strong>x${bossAmounts}</strong>`;
        bossDOM.previousElementSibling.src = `${genshinimage["materials"][boss]["fandom"]}`;

        bossDOM.previousElementSibling.addEventListener('click', () =>{
            window.open(genshinlink["materials"][boss]["fandom"], "_blank");
        });
        hover(bossDOM.previousElementSibling);
    });
    
    // Change Crown Materials
    [...document.getElementsByClassName("crown")].forEach((crownDOM) =>{
        crownDOM.innerHTML = `${genshindb["materials"][crown]["name"]} <strong>x${crownAmounts}</strong>`;
        crownDOM.previousElementSibling.src = `${genshinimage["materials"][crown]["fandom"]}`;

        crownDOM.previousElementSibling.addEventListener('click', () =>{
            window.open(genshinlink["materials"][crown]["fandom"], "_blank");
        });
        hover(crownDOM.previousElementSibling);
    });
}

function initializeArtifacts(){
    
}

function initializeWeapons(){

}

///////////////////////////////////////////////////////////////////////

/****** HELPER FUNCTIONS *******/
const hover = (image) =>{
    image.addEventListener('mouseover', () =>{
        image.style.transform = "scale(1.1)";
    });
    image.addEventListener('mouseout', () =>{
        image.style.transform = "scale(1)";
    })
}