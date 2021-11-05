const name = "beidou";
const stones = ["vajradaamethystsliver", "vajradaamethystfragment", "vajradaamethystchunk", "vajradaamethystgemstone", "noctilucousjade"];
const collectable = ["treasurehoarderinsignia", "silverraveninsignia", "goldenraveninsignia"];
const artifacts = ["gladiatorsfinale", "retracingbolide", "thunderingfury"];

let genshindb = {};
let genshinimage = {};

window.addEventListener("DOMContentLoaded", init);

async function init(){
    let waitData = await fetchData();
    let waitImage = await fetchImage();

    if(!waitData || !waitImage){
        console.log("Data Fetch Unsuccesful");
        return;
    }

    initializeData();
}

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

function initializeData(){
    
    console.log(genshindb);
    console.log(genshinimage);

    // Change Character Title 
    document.getElementById("character-name").innerHTML = genshindb["characters"][`${name}`]["name"];

    // Change Character Splash in Materials
    document.getElementById("character-splash").firstElementChild.src = genshinimage["characters"][`${name}`]["portrait"];

    // Change Talent and Ascension Materials 
    [...document.getElementsByClassName("stone")].forEach((stone, index) =>{
        stone.innerHTML = `${genshindb["materials"][stones[index]]["name"]} <strong>x</strong>`;
    });

    [...document.getElementsByClassName("collectable")].forEach((collect, index) =>{
        if(index < 3){
            collect.innerHTML = `${genshindb["materials"][collectable[index]]["name"]} <strong>x</strong>`;
        } else{
            collect.innerHTML = `${genshindb["materials"][collectable[index - 3]]["name"]} <strong>x</strong>`;
        }
    });
}

