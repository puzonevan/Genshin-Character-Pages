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
const builds = [
    {
        title: "Electro DPS", 
        description: "Beidou is capable of being the front damage dealer \
                    through utilizing autos, perfect counters, and constantly \
                    having Stormcaller active with a support electro as a battery.",
        mainweapon: "theunforged", 
        replaceweapon: "rainslasher", 
        artifactset1: ["gladiatorsfinale", "thunderingfury"], 
        artifactset2: [],
        substats: "ATK% / Electro DMG / CRIT DMG"
    },
    {
        title: "Parry Main", 
        description: "FULL COUNTER. One must perfect the art of countering \
                    in order to dish out the most damage possible.",
        mainweapon: "wolfsgravestone", 
        replaceweapon: "rainslasher", 
        artifactset1: ["retracingbolide"], 
        artifactset2: ["emblemofseveredfate"],
        substats: "ATK% / Electro DMG / CRIT DMG"
    }
]

///////////////////////////////////////////////////////////////////////

/****** CHARACTER STORIES *******/



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
    initializeBuilds();
    initializeTalents();
    initializeConstellations();
}

///////////////////////////////////////////////////////////////////////

/****** FETCH FUNCTIONS *******/
async function fetchData(){
    return new Promise((resolve, reject) =>{
        fetch("../../../min/data2.min.json")
        .then(response => response.json())
        .then(data =>{
            genshindb = data;
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
    document.getElementById("title").innerHTML = genshindb["characters"][`${name}`]["name"];

    // Change Character Splash in Materials
    document.getElementById("character-splash").firstElementChild.src = genshinimage["characters"][`${name}`]["portrait"];

    // Change Stone Materials 
    [...document.getElementsByClassName("stone")].forEach((stone, index) =>{
        stone.innerHTML = `${genshindb["materials"][stones[index]]["name"]} <strong>x${stoneAmounts[index]}</strong>`;
        stone.previousElementSibling.src = `${genshinimage["materials"][stones[index]]["fandom"]}`;
        stone.previousElementSibling.alt = `${genshindb["materials"][stones[index]]["name"]}`;

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
            collect.previousElementSibling.alt = `${genshindb["materials"][collectable[index]]["name"]}`;
            collect.previousElementSibling.addEventListener('click', () =>{
                window.open(genshinlink["materials"][collectable[index]]["fandom"], "_blank");
            });
        } else{
            collect.innerHTML = `${genshindb["materials"][collectable[index - 3]]["name"]} <strong>x${collectableAmounts[index]}</strong>`;
            collect.previousElementSibling.src = `${genshinimage["materials"][collectable[index - 3]]["fandom"]}`;
            collect.previousElementSibling.alt = `${genshindb["materials"][collectable[index - 3]]["name"]}`;
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
        unique.previousElementSibling.alt = `${genshindb["materials"][uniqueCollectable]["name"]}`;

        unique.previousElementSibling.addEventListener('click', () =>{
            window.open(genshinlink["materials"][uniqueCollectable]["fandom"], "_blank");
        });
        hover(unique.previousElementSibling);
    });

    // Change Book Materials
    [...document.getElementsByClassName("book")].forEach((book, index) =>{
        book.innerHTML = `${genshindb["materials"][books[index]]["name"]} <strong>x${booksAmounts[index]}</strong>`;
        book.previousElementSibling.src = `${genshinimage["materials"][books[index]]["fandom"]}`;
        book.previousElementSibling.alt = `${genshindb["materials"][books[index]]["name"]}`;

        book.previousElementSibling.addEventListener('click', () =>{
            window.open(genshinlink["materials"][books[index]]["fandom"], "_blank");
        });
        hover(book.previousElementSibling);
    });
    
    // Change Boss Materials
    [...document.getElementsByClassName("boss")].forEach((bossDOM) =>{
        bossDOM.innerHTML = `${genshindb["materials"][boss]["name"]} <strong>x${bossAmounts}</strong>`;
        bossDOM.previousElementSibling.src = `${genshinimage["materials"][boss]["fandom"]}`;
        bossDOM.previousElementSibling.alt = `${genshindb["materials"][boss]["name"]}`;

        bossDOM.previousElementSibling.addEventListener('click', () =>{
            window.open(genshinlink["materials"][boss]["fandom"], "_blank");
        });
        hover(bossDOM.previousElementSibling);
    });
    
    // Change Crown Materials
    [...document.getElementsByClassName("crown")].forEach((crownDOM) =>{
        crownDOM.innerHTML = `${genshindb["materials"][crown]["name"]} <strong>x${crownAmounts}</strong>`;
        crownDOM.previousElementSibling.src = `${genshinimage["materials"][crown]["fandom"]}`;
        crownDOM.previousElementSibling.alt = `${genshindb["materials"][crown]["name"]}`;

        crownDOM.previousElementSibling.addEventListener('click', () =>{
            window.open(genshinlink["materials"][crown]["fandom"], "_blank");
        });
        hover(crownDOM.previousElementSibling);
    });
}

function initializeBuilds(){
    builds.forEach((build) =>{
        const buildContainer = document.createElement("div");
        buildContainer.setAttribute("class", "build");
        buildContainer.setAttribute("id", "build");

        const buildTitle = document.createElement("h2");
        buildTitle.setAttribute("class", "build-title");
        buildTitle.setAttribute("data-aos", "fade-left");
        buildTitle.setAttribute("data-aos-delay", "700");
        buildTitle.innerHTML = build["title"];
        const buildDescription = document.createElement("p");
        buildDescription.setAttribute("class", "build-description");
        buildDescription.setAttribute("data-aos", "fade-left");
        buildDescription.setAttribute("data-aos-delay", "700");
        buildDescription.innerHTML = build["description"];
        
        const weaponsArtifactsContainer = document.createElement("div");
        weaponsArtifactsContainer.setAttribute("class", "weapons-artifacts");

        const weaponsContainer = document.createElement("div");
        weaponsContainer.setAttribute("class", "weapons");
        const weaponsTitle = document.createElement("h3");
        const weaponsOr = document.createElement("h3");
        weaponsTitle.setAttribute("data-aos", "fade-left");
        weaponsTitle.setAttribute("data-aos-delay", "650");
        weaponsTitle.innerHTML = "Weapon";
        weaponsOr.setAttribute("class", "or-text");
        weaponsOr.setAttribute("data-aos", "fade-down");
        weaponsOr.setAttribute("data-aos-delay", "250");
        weaponsOr.innerHTML = "Or";
        const weapon1 = createWeaponDiv(build["mainweapon"], 450, "small");
        const weapon2 = createWeaponDiv(build["replaceweapon"], 450, "small");
        weaponsContainer.appendChild(weaponsTitle);
        weaponsContainer.appendChild(weapon1);
        weaponsContainer.appendChild(weaponsOr);
        weaponsContainer.appendChild(weapon2);

        const artifactsContainer = document.createElement("div");

        weaponsArtifactsContainer.appendChild(weaponsContainer);

        buildContainer.appendChild(buildTitle);
        buildContainer.appendChild(buildDescription);
        buildContainer.appendChild(weaponsArtifactsContainer);

        document.getElementById("build-section").insertBefore(buildContainer, document.getElementById("build-section").children[1]);
    })
        
}

function initializeArtifacts(){
    
}

// function initializeWeapons(){
//     const weapon = createWeaponDiv("theunforged", 250, "large");
//     document.getElementById("weapons").appendChild(weapon);
// }

function initializeTalents(){

    const talents = genshindb["talents"][`${name}`];

    const talentsImages = genshinimage["talents"][`${name}`];
    const talentsImagesKeys = Object.keys(genshinimage["talents"][`${name}`]);

    const talentsImagesDOM = [...document.getElementById("abilities").children];
    
    talentsImagesDOM.forEach((talent, index) =>{
        talent.firstElementChild.src = talentsImages[talentsImagesKeys[index]];
        talent.firstElementChild.alt = talentsImages[talentsImagesKeys[index]];
        hover(talent.firstElementChild);

        talent.addEventListener('click', () =>{
            
            // Change Title and Description
            document.getElementById("combat-title").innerHTML = talents[talentsImagesKeys[index]]["name"];
            document.getElementById("combat-description").innerHTML = talents[talentsImagesKeys[index]]["info"];

            // Open lightbox
            document.getElementById("combat-overlay").style.zIndex = "2";
            document.getElementById("combat-overlay").style.opacity = "1";
            document.getElementById("abilities-constellation").style.opacity = "0";
            document.getElementById("combat-video").style.display = "block";
        });
    });

    
}

function initializeConstellations(){
    const constellations = genshindb["constellations"][`${name}`];
    
    const constellationsImages = genshinimage["constellations"][`${name}`];
    const constellationsImagesKeys = Object.keys(constellationsImages);

    const constellationsImagesDOM = [...document.getElementById("constellations").children];

    constellationsImagesDOM.forEach((constellation, index) =>{
        constellation.firstElementChild.src = constellationsImages[constellationsImagesKeys[index]];
        constellation.firstElementChild.alt = constellationsImages[constellationsImagesKeys[index]];
        hover(constellation.firstElementChild);

        constellation.addEventListener('click', () =>{
            
            // Change Title and Description
            document.getElementById("combat-title").innerHTML = constellations[constellationsImagesKeys[index]]["name"];
            document.getElementById("combat-description").innerHTML = constellations[constellationsImagesKeys[index]]["effect"];

            // Open lightbox
            document.getElementById("combat-overlay").style.zIndex = "2";
            document.getElementById("combat-overlay").style.opacity = "1";
            document.getElementById("abilities-constellation").style.opacity = "0";
            document.getElementById("combat-video").style.display = "none";
        });
    });
}

///////////////////////////////////////////////////////////////////////

/****** HELPER FUNCTIONS *******/

/**
 * hover - change scale when hovering an image
 * @param {DOM} image - image DOM object
 */
const hover = (image) =>{
    image.addEventListener('mouseover', () =>{
        image.style.transform = "scale(1.1)";
    });
    image.addEventListener('mouseout', () =>{
        image.style.transform = "scale(1)";
    })
}

const createWeaponDiv = (weapon, delay, size) => {
    const container = document.createElement("div");
    container.setAttribute("class", "weapon");
    container.setAttribute("id", "weapon");
    container.setAttribute("data-aos", "fade-down");
    container.setAttribute("data-aos-delay", delay);

    const weaponTitle = document.createElement("h4");
    weaponTitle.setAttribute("id", "weapon-title");
    weaponTitle.setAttribute("class", "weapon-title");
    weaponTitle.innerHTML = genshindb["weapons"][weapon]["name"]
    const weaponSubstat = document.createElement("h5");
    weaponSubstat.setAttribute("class", "weapon-substat");
    weaponSubstat.setAttribute("id", "weapon-substat");
    weaponSubstat.innerHTML = genshindb["weapons"][weapon]["substat"];
    const weaponDescription = document.createElement("p");
    weaponDescription.setAttribute("class", "weapon-description");
    weaponDescription.setAttribute("id", "weapon-description");
    weaponDescription.innerHTML = genshindb["weapons"][weapon]["effect"];
    const weaponImageContainer = document.createElement("div");
    weaponImageContainer.setAttribute("class", "image-video-container");
    weaponImageContainer.setAttribute("id", "weapon-image");
    const weaponImage = document.createElement("img");
    weaponImage.setAttribute("class", size);
    weaponImage.setAttribute("src", genshinimage["weapons"][weapon]["icon"]);
    weaponImage.setAttribute("alt", genshindb["weapons"][weapon]["name"])
    weaponImageContainer.appendChild(weaponImage);



    container.appendChild(weaponTitle);
    container.appendChild(weaponSubstat);
    container.appendChild(weaponDescription);
    container.appendChild(weaponImageContainer);

    return container;
}

const createArtifactDiv = (artifact, delay, size) =>{ 

    const container = document.createElement("div");
    container.setAttribute("class", "artifact");
    container.setAttribute("id", "artifact");
    container.setAttribute("data-aos", "fade-down");
    container.setAttribute("data-aos-delay", delay);

    const artifactTitle = document.createElement("h4");
    artifactTitle.setAttribute("id", "artifact-title");
    artifactTitle.setAttribute("class", "artifact-title");
    artifactTitle.innerHTML = genshindb["artifacts"][artifact]["name"]
    const artifactSubstat = document.createElement("h5");
    artifactSubstat.setAttribute("class", "artifact-substat");
    artifactSubstat.setAttribute("id", "artifact-substat");
    artifactSubstat.innerHTML = builds[0]["substats"];
    const artifactDescription = document.createElement("p");
    artifactDescription.setAttribute("class", "artifact-description");
    artifactDescription.setAttribute("id", "artifact-description");
    artifactDescription.innerHTML = genshindb["artifacts"][artifact]["2pc"];
    const artifactImageContainer = document.createElement("div");
    artifactImageContainer.setAttribute("class", "image-video-container");
    artifactImageContainer.setAttribute("id", "artifact-image");
    const artifactImage = document.createElement("img");
    artifactImage.setAttribute("class", size);
    artifactImage.setAttribute("src", genshinimage["artifacts"][artifact]["circlet"]);
    artifactImage.setAttribute("alt", genshindb["artifacts"][artifact]["name"])
    artifactImageContainer.appendChild(artifactImage);



    container.appendChild(artifactTitle);
    container.appendChild(artifactSubstat);
    container.appendChild(artifactDescription);
    container.appendChild(artifactImageContainer);

    return container;
}

/**
 * DOM event to close talent/constellation lightbox when x clicked
 */
document.getElementById("combat-exit").addEventListener('click', () => {
    document.getElementById("combat-overlay").style.zIndex = "-1";
    document.getElementById("combat-overlay").style.opacity = "0";
    document.getElementById("abilities-constellation").style.opacity = "1";
});
    
