// Change variables below for different characters 
// DO NOT CHANGE AMOUNTS FOR MATERIALS
const name = "xiao";
const image = "./Xiao/images/xiao.png";

///////////////////////////////////////////////////////////////////////

/****** CHARACTER MATERIAL VARIABLES *******/
const stones = ["vayudaturquoisesliver", "vayudaturquoisefragment", "vayudaturquoisechunk", "vayudaturquoisegemstone", "qingxin"];
const stoneAmounts = [1, 9, 9, 6, 168];
const collectable = ["slimecondensate", "slimesecretions", "slimeconcentrate"];
const collectableAmounts = [18, 30, 36, 18, 66, 93];
const uniqueCollectable = "juvenilejade";
const uniqueCollectableAmounts = 46;
const books = ["teachingsofprosperity", "guidetoprosperity", "philosophiesofprosperity"];
const booksAmounts = [9, 65, 114];
const boss = "shadowofthewarrior";
const bossAmounts = 18;
const crown = "crownofinsight";
const crownAmounts = 3;

///////////////////////////////////////////////////////////////////////

/****** CHARACTER BUILDS *******/
const builds = [
    {
        title: "Anemo DPS Build", 
        description: "This build empowers Xiao's Normal Attack and low CD Elemental Skill damage, which are all also enhanced by his Elemental Burst skill.",
        mainweapon: "primordialjadewingedspear", 
        replaceweapon: "blackcliffpole", 
        artifactset1: ["gladiatorsfinale", "viridescentvenerer"], 
        artifactset2: ["shimenawasreminiscence", "viridescentvenerer"],
        substats: "ATK% / Anemo DMG / CRIT DMG"
    },
    {
        title: "Anemo DPS Build", 
        description: "This build empowers Xiao's Normal Attack and low CD Elemental Skill damage, which are all also enhanced by his Elemental Burst skill.",
        mainweapon: "primordialjadewingedspear", 
        replaceweapon: "blackcliffpole", 
        artifactset1: ["gladiatorsfinale", "viridescentvenerer"], 
        artifactset2: ["shimenawasreminiscence", "viridescentvenerer"],
        substats: "ATK% / Anemo DMG / CRIT DMG"
    },
]

///////////////////////////////////////////////////////////////////////

/****** FETCH DATA VARIABLES *******/
let genshindb = {};
let genshinimage = {};
let genshinlink = {};

///////////////////////////////////////////////////////////////////////

/****** ASYNC INIT FUNCTIONS *******/

window.addEventListener("DOMContentLoaded", init);
async function init(){

    // Json Fetches
    let waitData = await fetchData();
    let waitImage = await fetchImage();
    let waitLink = await fetchLink();

    // Fetch check
    if(!waitData || !waitImage || !waitLink){
        console.log("Data Fetch Unsuccesful");
        return;
    }

    // Populate with information
    initializeMaterials();
    initializeBuilds();
    initializeTalents();
    initializeConstellations();
}

///////////////////////////////////////////////////////////////////////

/****** FETCH FUNCTIONS *******/

/**
 * fetches genshin general data
 * @returns json data 
 */
async function fetchData(){
    return new Promise((resolve, reject) =>{
        fetch("https://puzonevan.github.io/Genshin-Character-Pages/min/data2.min.json")
        .then(response => response.json())
        .then(data =>{
            genshindb = data;
            resolve(true);
        })
        .catch((error) => reject(false));
    });
}

/**
 * fetches genshin image links
 * @returns json data
 */
async function fetchImage(){
    return new Promise((resolve, reject) =>{
        fetch("https://puzonevan.github.io/Genshin-Character-Pages/min/image.min.json")
        .then(response => response.json())
        .then(data =>{
            genshinimage = data;
            resolve(true);
        })
        .catch((error) => reject(false));
    })
}

/**
 * fetches genshin url links
 * @returns json data
 */
async function fetchLink(){
    return new Promise((resolve, reject) =>{
        fetch("https://puzonevan.github.io/Genshin-Character-Pages/min/url.min.json")
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

/**
 * populate first section containing materials needed for the 
 * talents, ascensions, etc of the character
 */
function initializeMaterials(){
        
    console.log(genshindb);
    console.log(genshinimage);
    console.log(genshinlink);

    // Change Character Title 
    document.getElementById("title").innerHTML = genshindb["characters"][`${name}`]["name"];
    // Change Character Sub Title 
    document.getElementById("sub-title").innerHTML = genshindb["characters"][`${name}`]["title"];

    // Change Character Splash in Materials
    document.getElementById("character-splash").firstElementChild.src = image;

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

    // TABLE EVENTS
    tableDOM();
}

/**
 * change materials based on level and ascension feature
 */
function tableDOM(){

    // DOM Tables
    const ascensionTable = document.getElementById("ascension-table");
    const talentTable1 = document.getElementById("talent-table-1");
    const talentTable2 = document.getElementById("talent-table-2");

    // DOM Ascension Materials
    const ascensionStone = document.getElementById("ascension-stone");
    const ascensionMonster = document.getElementById("ascension-monster");
    
    // Ascension materials buttons
    [...ascensionTable.children[0].children[0].children].forEach((button, index) =>{
        button.addEventListener('click', () =>{
            removeChildren(ascensionStone);
            removeChildren(ascensionMonster);
            const materials = genshindb['characters'][`${name}`]['costs'][`ascend${index + 1}`];
            ascensionMonster.remove();
            for(let i = 0; i < materials.length; i++){
                const item = createItem(materials[i].name, materials[i].count);
                ascensionStone.appendChild(item);
            }
        });
    });

    // DOM Talent Materials
    const talentBooks = document.getElementById("talent-books");
    const talentMonster = document.getElementById("talent-monster");

    // Talent materials buttons desktop
    [...talentTable1.children[0].children[0].children].forEach((button, index) =>{
        button.addEventListener('click', () =>{
            removeChildren(talentBooks);
            removeChildren(talentMonster);
            talentMonster.remove();
            const talents = genshindb['talents'][`${name}`]['costs'][`lvl${index + 2}`];
            for(let i = 0; i < talents.length; i++){
                const item = createItem(talents[i].name, talents[i].count * 3);
                talentBooks.appendChild(item);
            }
        })
    });
    // Talent materials buttons mobile row 1
    [...talentTable2.children[0].children[0].children].forEach((button, index) =>{
        button.addEventListener('click', () =>{
            removeChildren(talentBooks);
            removeChildren(talentMonster);
            talentMonster.remove();
            const talents = genshindb['talents'][`${name}`]['costs'][`lvl${index + 2}`];
            for(let i = 0; i < talents.length; i++){
                const item = createItem(talents[i].name, talents[i].count * 3);
                talentBooks.appendChild(item);
            }
        })
    });
    // Talent materials buttons mobile row 2
    [...talentTable2.children[0].children[1].children].forEach((button, index) =>{
        button.addEventListener('click', () =>{
            removeChildren(talentBooks);
            removeChildren(talentMonster);
            talentMonster.remove();
            const talents = genshindb['talents'][`${name}`]['costs'][`lvl${index + 5}`];
            for(let i = 0; i < talents.length; i++){
                const item = createItem(talents[i].name, talents[i].count * 3);
                talentBooks.appendChild(item);
            }
        })
    });
    // Talent materials buttons mobile row 3
    [...talentTable2.children[0].children[2].children].forEach((button, index) =>{
        button.addEventListener('click', () =>{
            removeChildren(talentBooks);
            removeChildren(talentMonster);
            talentMonster.remove();
            const talents = genshindb['talents'][`${name}`]['costs'][`lvl${index + 8}`];
            for(let i = 0; i < talents.length; i++){
                const item = createItem(talents[i].name, talents[i].count * 3);
                talentBooks.appendChild(item);
            }
        })
    });

    
}

/**
 * populate second section with two builds containing weapons
 * and artifacts for the character. 
 * Own builds or from Genshin.gg or game8.co
 */
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
        const weapon1 = createWeaponDiv(build["mainweapon"], 450, "large");
        const weapon2 = createWeaponDiv(build["replaceweapon"], 450, "large");
        weaponsContainer.appendChild(weaponsTitle);
        weaponsContainer.appendChild(weapon1);
        weaponsContainer.appendChild(weaponsOr);
        weaponsContainer.appendChild(weapon2);

        const artifactsContainer = document.createElement("div");
        artifactsContainer.setAttribute("class", "artifacts");
        const artifactsTitle = document.createElement("h3");
        artifactsTitle.setAttribute("data-aos", "fade-left");
        artifactsTitle.setAttribute("data-aos-delay", "650");
        artifactsTitle.textContent = "Artifacts";
        artifactsContainer.appendChild(artifactsTitle);

        if(build["artifactset1"].length == 1){
            artifactsContainer.appendChild(createArtifactDiv(build["artifactset1"][0], 200, "large", 4));
        }
        else if(build["artifactset1"].length == 2){
            artifactsContainer.appendChild(createArtifactDiv(build["artifactset1"][0], 200, "small", 2));
            artifactsContainer.appendChild(createArtifactDiv(build["artifactset1"][1], 200, "small", 2));
        }

        const artifactsOr = document.createElement("h3");
        artifactsOr.setAttribute("class", "or-text");
        artifactsOr.setAttribute("data-aos", "fade-down");
        artifactsOr.setAttribute("data-aos-delay", "250");
        artifactsOr.innerHTML = "Or";
        if(build["artifactset2"].length == 1){
            artifactsContainer.appendChild(artifactsOr);
            artifactsContainer.appendChild(createArtifactDiv(build["artifactset2"][0], 200, "large", 4));
        }
        else if(build["artifactset2"].length == 2){
            artifactsContainer.appendChild(artifactsOr);
            artifactsContainer.appendChild(createArtifactDiv(build["artifactset2"][0], 200, "small", 2));
            artifactsContainer.appendChild(createArtifactDiv(build["artifactset2"][1], 200, "small", 2));
        }

        weaponsArtifactsContainer.appendChild(weaponsContainer);
        weaponsArtifactsContainer.appendChild(artifactsContainer);

        buildContainer.appendChild(buildTitle);
        buildContainer.appendChild(buildDescription);
        buildContainer.appendChild(weaponsArtifactsContainer);

        document.getElementById("build-section").insertBefore(buildContainer, document.getElementById("build-section").children[1]);
    })
        
}

/**
 * populate third section with talents or abilities that the
 * character can do including passives. 
 */
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
        
        talent.addEventListener('mouseover', () =>{
            document.getElementById("ability-title").textContent = talents[talentsImagesKeys[index]]["name"]
        })
    });

    
}

/**
 * populate third section with constellations or effects when
 * another copy of the character is obtained and upgraded
 */
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
        constellation.addEventListener('mouseover', () =>{
            document.getElementById("constellation-title").innerHTML = constellations[constellationsImagesKeys[index]]["name"];
        })
    });
    
}

///////////////////////////////////////////////////////////////////////

/****** HELPER FUNCTIONS *******/

/**
 * Remove all child nodes of a parent node
 * @param {DOM} parent 
 */
function removeChildren(parent){
    while(parent.firstElementChild){
        parent.removeChild(parent.firstElementChild);
    }
}

/**
 * create item container for talents and materials section 
 * @param {""} name name of the item 
 * @param {#} count how many of the item
 * @returns 
 */
function createItem(name, count){
    const container = document.createElement("div");
    container.setAttribute("class", "item image-video-container");
    const image = document.createElement("img");
    image.setAttribute("src", genshinimage["materials"][`${name.toLowerCase().split(" ").join("")}`]["fandom"]);
    image.setAttribute("alt", name);
    const description = document.createElement("p");
    description.setAttribute("class", "item-name");
    description.innerHTML = `${name} <strong>x${count}</strong>`;

    container.appendChild(image);
    container.appendChild(description);
    
    return container;
}

/**
 * change scale when hovering an image
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

/**
 * create weapon div element with corresponding weapon info
 * @param {""} weapon - weapon name 
 * @param {""} delay - delay for data aos
 * @param {""} size - size for image
 * @returns div containing specific weapon information
 */
const createWeaponDiv = (weapon, delay, size) => {

    // Weapon Container
    const container = document.createElement("div");
    container.setAttribute("class", "weapon");
    container.setAttribute("id", "weapon");
    container.setAttribute("data-aos", "fade-down");
    container.setAttribute("data-aos-delay", delay);

    // Weapon Title, Substat, and description
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

    // Weapon description values and limit length
    let weaponEffect = genshindb["weapons"][weapon]["effect"];
    weaponEffect.length > 180 ? weaponEffect = weaponEffect.slice(0, 180) + "..." : weaponEffect = weaponEffect;
    genshindb["weapons"][weapon]["r1"].forEach((value, index) =>{
        weaponEffect = weaponEffect.replace(`{${index}}`, value);
    });
    weaponDescription.innerHTML = weaponEffect;

    // Weapon Image 
    const weaponImageContainer = document.createElement("div");
    weaponImageContainer.setAttribute("class", "image-video-container");
    weaponImageContainer.setAttribute("id", "weapon-image");
    const weaponImage = document.createElement("img");
    weaponImage.setAttribute("class", size);
    weaponImage.setAttribute("src", genshinimage["weapons"][weapon]["icon"]);
    weaponImage.setAttribute("alt", genshindb["weapons"][weapon]["name"])
    weaponImageContainer.appendChild(weaponImage);

    // Weapon Title Events
    weaponTitle.addEventListener('mouseover', () =>{
        weaponTitle.style.color = "var(--secondary-color)";
        weaponTitle.style.cursor = "pointer";
    });
    weaponTitle.addEventListener('mouseout', () =>{
        weaponTitle.style.color = "var(--primary-color)";
    });
    weaponTitle.addEventListener('click', () =>{
        window.open(genshinlink["weapons"][weapon]["fandom"], "_blank").focus();
    });

    // Append to main container
    container.appendChild(weaponTitle);
    container.appendChild(weaponSubstat);
    container.appendChild(weaponDescription);
    container.appendChild(weaponImageContainer);

    return container;
}

/**
 * create artifact div element with corresponding artifact info
 * @param {""} artifact - artifact name
 * @param {""} delay - delay for data aos
 * @param {""} size - size for image
 * @returns div containing specific artifact information
 */
const createArtifactDiv = (artifact, delay, size, effect) =>{ 

    // Artifact Container
    const container = document.createElement("div");
    container.setAttribute("class", "artifact");
    container.setAttribute("id", "artifact");
    container.setAttribute("data-aos", "fade-down");
    container.setAttribute("data-aos-delay", delay);

    // Artifact Title, Substat, and Description
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
    
    // Description specifics
    if(effect == 2){
        artifactDescription.innerHTML = `(2) ${genshindb["artifacts"][artifact]["2pc"]}<br>`;
    }
    else if(effect == 4){
        artifactDescription.innerHTML = `(2) ${genshindb["artifacts"][artifact]["2pc"]} <br>
                                    (4) ${genshindb["artifacts"][artifact]["4pc"]}`;
        // Limit character count if too long
        artifactDescription.innerHTML.length > 180 ? artifactDescription.innerHTML = artifactDescription.innerHTML.slice(0, 180) + "..." : artifactDescription.innerHTML = artifactDescription.innerHTML;
    }

    // Artifact Image 
    const artifactImageContainer = document.createElement("div");
    artifactImageContainer.setAttribute("class", "image-video-container");
    artifactImageContainer.setAttribute("id", "artifact-image");
    const artifactImage = document.createElement("img");
    artifactImage.setAttribute("class", size);
    artifactImage.setAttribute("src", genshinimage["artifacts"][artifact]["circlet"]);
    artifactImage.setAttribute("alt", genshindb["artifacts"][artifact]["name"])
    artifactImageContainer.appendChild(artifactImage);

    // Artifact Title Events
    artifactTitle.addEventListener('mouseover', () =>{
        artifactTitle.style.color = "var(--secondary-color)";
        artifactTitle.style.cursor = "pointer";
    });
    artifactTitle.addEventListener('mouseout', () =>{
        artifactTitle.style.color = "var(--primary-color)";
    });
    artifactTitle.addEventListener('click', () =>{
        window.open(genshinlink["weapons"][artifact]["fandom"], "_blank").focus();
    });

    // Append to main container
    container.appendChild(artifactTitle);
    container.appendChild(artifactSubstat);
    container.appendChild(artifactDescription);
    container.appendChild(artifactImageContainer);

    return container;
}

///////////////////////////////////////////////////////////////////////

/****** ADDITIONAL DOM FUNCTIONS *******/

/**
 * event to close talent/constellation lightbox when x clicked
 */
document.getElementById("combat-exit").addEventListener('click', () => {
    document.getElementById("combat-overlay").style.zIndex = "-1";
    document.getElementById("combat-overlay").style.opacity = "0";
    document.getElementById("abilities-constellation").style.opacity = "1";
});
    
