/**
 * Character Info 
 *      - Change the character object below based on the character 
 *      - Change the name, materials, builds, and lore 
 *      - Initializes the HTML based on the character
 */

const character = {

    name: "Raiden Shogun", 

    splash: "RaidenShogun/images/Character_Raiden_Shogun_Wish.png",

    abilities: [
        "RaidenShogun/combat/Talent_Origin.png", 
        "RaidenShogun/combat/Talent_Transcendence_Baleful_Omen.png",
        "RaidenShogun/combat/Talent_Secret_Art_Musou_Shinsetsu.png",
        "RaidenShogun/combat/Talent_Wishes_Unnumbered.png",
        "RaidenShogun/combat/Talent_Enlightened_One.png",
        "RaidenShogun/combat/Talent_All-Preserver.png"
    ],

    constellations: [
        "RaidenShogun/constellation/Constellation_Ominous_Inscription.png",
        "RaidenShogun/constellation/Constellation_Steelbreaker.png",
        "RaidenShogun/constellation/Constellation_Shinkage_Bygones.png",
        "RaidenShogun/constellation/Constellation_Pledge_of_Propriety.png",
        "RaidenShogun/constellation/Constellation_Shogun's_Descent.png",
        "RaidenShogun/constellation/Constellation_Wishbearer.png"
    ],

    materials: {
        stone: [
            [1, 9, 9, 6, 46],
            "Amethyst Sliver", 
            "Amethyst Fragment", 
            "Amethyst Chunk", 
            "Amethyst Gemstone", 
            "Storm Beads",
        ],
        collectable: [
            [18, 30, 36, 168],
            [18, 66, 93, 3],
            "Old Handguard", 
            "Kageuchi Handguard", 
            "Famed Handguard", 
            "Amakumo Fruit",
        ],
        book: [
            [9, 63, 114, 18],
            "Teachings of Light",
            "Guide to Light", 
            "Philosophies of Light", 
        ],
        boss: [
            18,
            "Molten Moment",
        ],
        crown: [
            3,
            "Crown of Insights",
        ]
    },

    builds: [
        {
            name: "Electro Sub DPS Build", 
            description: "While her main role is to be a battery and provide energy for the main damage dealer and other supports, \
            she can still provide large burst potential and damage multiple targets at once",
            weapons: [
                {
                    name: "Engulfing Lightning", 
                    substat: "Energy Recharge", 
                    description: "ATK increased by 28% of Energy Recharge over the base 100%. You can gain a maximum bonus of 80% ATK. \
                    Gain 30% Energy Recharge for 12s after using an Elemental Burst.",
                    image: "../RaidenShogun/weapons/Weapon_Engulfing_Lightning.png"
                },
                {
                    name: "The Catch",
                    substat: "Energy Recharge", 
                    description: "Increases Elemental Burst DMG by 16% and Elemental Burst CRIT Rate by 6%.",
                    image: "../RaidenShogun/weapons/Weapon_The_Catch.png"
                }
            ],
            artifacts: [
                {
                    name: "Emblem of Severed Fate", 
                    substat: "Atk% / Electro DMG / Crit DMG",
                    description: "<strong>(2)</strong> Energy Recharge +20% <br><br><strong>(4)</strong> \
                    Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can \
                    be obtained in this way",         
                    image: "../RaidenShogun/weapons/Item_Magnificent_Tsuba.png"
                },
                {
                    name: "Emblem of Severed Fate", 
                    substat: "Atk% / Electro DMG / Crit DMG",
                    description: "<strong>(2)</strong> Energy Recharge +20%",
                    image: "../RaidenShogun/weapons/Item_Magnificent_Tsuba.png"
                },
                {
                    name: "Thundering Fury", 
                    substat: "Atk% / Electro DMG / Crit DMG",
                    description: "<strong>(2)</strong> Electro DMG Bonus +15%",
                    image: "../RaidenShogun/weapons/Item_Thunderbird's_Mercy.png"
                }
            ]
        },
        {
            name: "Electro Main DPS Build", 
            description: "The Raiden Shogun falls of in consistent damage because her auto attacks are still physical. \
            However, her skill and ult can still dish out loads of burst damage and that is still the main focus.",
            weapons: [
                {
                    name: "Engulfing Lightning", 
                    substat: "Energy Recharge", 
                    description: "ATK increased by 28% of Energy Recharge over the base 100%. You can gain a maximum bonus of 80% ATK. \
                    Gain 30% Energy Recharge for 12s after using an Elemental Burst.",
                    image: "../RaidenShogun/weapons/Weapon_Engulfing_Lightning.png"
                },
                {
                    name: "Prototype Starglitter",
                    substat: "Energy Recharge", 
                    description: "After using an Elemental Skill, increases Normal and Charged Attack DMG by 8% for 12s. Max 2 stacks.",
                    image: "../RaidenShogun/weapons/Weapon_Prototype_Starglitter.png"
                }
            ],
            artifacts: [
                {
                    name: "Emblem of Severed Fate", 
                    substat: "Atk% / Electro DMG / Crit DMG",
                    description: "<strong>(2)</strong> Energy Recharge +20% <br><br><strong>(4)</strong> \
                    Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can \
                    be obtained in this way",         
                    image: "../RaidenShogun/weapons/Item_Magnificent_Tsuba.png"
                },
                {
                    name: "Emblem of Severed Fate", 
                    substat: "Atk% / Electro DMG / Crit DMG",
                    description: "<strong>(2)</strong> Energy Recharge +20%",         
                    image: "../RaidenShogun/weapons/Item_Magnificent_Tsuba.png"
                },
                {
                    name: "Shimenawa's Resistance", 
                    substat: "Atk% / Electro DMG / Crit DMG",
                    description: "<strong>(2)</strong> ATK +18%",
                    image: "../RaidenShogun/weapons/Item_Entangling_Bloom.png"
                }
            ]
        }
    ],

    lore: [
        {
            name: "Introduction",
            story: "The undisputed supreme ruler of Inazuma. Her Excellency, the Almighty Narukami Ogosho, promised the people \
            of Inazuma an unchanging eternity to last throughout the ages. After purging all sentiment with merciless lightning, \
            the solitude of her mind became a secluded space free from mortal joys and woes . . . "
        },
        {
            name: "Gnosis",
            story:  "Before she came to dwell in the Plane of Euthymia permanently, Ei was troubled for a time concerning where \
            she might store her Gnosis. She no longer had any need of it, but such an important item could not simply be placed anywhere. \
            She had initially intended to have it modified into an energy supply device, but no matter what she did, her techniques had no \
            effect on the Gnosis at all. . .",
        },
        {
            name: "Musou Isshin",
            story: "A sword that, once passed on, has accompanied Ei to this day. This sword has had two wielders, and has witnessed both time \
            and eternity. It was born from Raiden Makoto's divine might, but it was never once sharpened. It took after its owner, of course, \
            for Makoto was not one for battle. It was but a symbol, a sign of true peace. The day Makoto passed on, it was given into Ei's hands. \
            The sword was stained with blood. . ." 
        },
        {
            name: "Story 1",
            story: "The true name of the Raiden Shogun is \"Raiden Ei.\"In her long road, she has witnessed the price that Inazuma has had to pay \
            for progress over the hundreds and thousands of years. The happiest years of her life had passed her by, and those she once considered \
            friends became her foes. In the end, she even lost the reason for which she had wielded her sword. \"Where there is progress, there must \
            be loss. . .\""
        },
        {
            name: "Story 2",
            story: "For beings with a perishable form of flesh to pursue Eternity, they must first solve the unavoidable problem of lifespan. This \
            limited time troubled Ei greatly, until one day when a mysterious technique came before her eyes as if by a stroke of fate. Using such \
            techniques, one could create intricate puppets indistinguishable from true life. In theory, this puppet could perfectly imitate everything . . ."
        },
        {
            name: "Story 3",
            story: "Before Raiden Ei became the Shogun, she was a samurai responsible for seeing that the previous Shogun's orders were carried out. \
            The previous Electro Archon, Raiden Makoto, was no great fighter, and the things Ei had charge over were mostly matters of warfare and \
            slaughter. However, Ei also had moments of repose away from battle, sitting with her friends under the sakura trees and playing karuta. . ."
        },
        {
            name: "Story 4",
            story: "Ei still remembers the way in which Makoto greatly loved the scenery of Inazuma, its cuisine, and the stories of its people — and \
            how she loved telling Ei all about it. Though they both understood the concept of erosion well, Makoto was unlike Ei, who worried about the \
            future more often. Instead, Makoto's energies were focused on the present. . ."
        },
        {
            name: "Story 5",
            story: "One night, Raiden Ei entered a beautiful dreamscape while meditating. Here, there was nothing left between heaven and earth but her, \
            and a \"her\" that was akin to looking into a mirror. The automaton's voice flowed into her ears like a sigh: \"the eternity you resolved to \
            establish in your heart has been shaken by the countless wishes of the people. Thus, you have become my enemy. . .\""
        }

    ]

}

// Change Character Title 
document.getElementById("character-name").innerHTML = character.name;

// Change Character Splash in Materials
document.getElementById("character-splash").firstElementChild.src = character.splash;

// Change Talent and Ascension Materials 
[...document.getElementsByClassName("stone")].forEach((stone, index) =>{
    stone.innerHTML = `${character.materials.stone[index + 1]} <strong>x${character.materials.stone[0][index]}</strong>`;
});

[...document.getElementsByClassName("collectable")].forEach((collect, index) =>{
    if(index < 3){
        collect.innerHTML = `${character.materials.collectable[index + 2]} <strong>x${character.materials.collectable[0][index]}</strong>`;
    }
    else{
        collect.innerHTML = `${character.materials.collectable[index - 1]} <strong>x${character.materials.collectable[1][index - 3]}</strong>`;
    }
});

[...document.getElementsByClassName("unique-collectable")].forEach((unique) =>{
    unique.innerHTML = `${character.materials.collectable[5]} <strong>x${character.materials.collectable[0][3]}</strong>`;
});

[...document.getElementsByClassName("book")].forEach((book, index) =>{
    book.innerHTML = `${character.materials.book[index + 1]} <strong>x${character.materials.book[0][index]}</strong>`;
});

[...document.getElementsByClassName("boss")].forEach((boss) =>{
    boss.innerHTML = `${character.materials.boss[1]} <strong>x${character.materials.boss[0]}</strong>`;
});

[...document.getElementsByClassName("crown")].forEach((crown) =>{
    crown.innerHTML = `${character.materials.crown[1]} <strong>x${character.materials.crown[0]}</strong>`
});


// Change Builds 
[...document.getElementsByClassName("build")].forEach((build, index) =>{
    
    // Get current build from index 
    let currentBuild = character.builds[index];

    // Initialize build name and description
    build.querySelector("#build-title").innerHTML = currentBuild.name;
    build.querySelector("#build-description").innerHTML = currentBuild.description;

    // Get the weapons div from the build 
    let weapons = [...build.querySelector(".weapons-artifacts").querySelector(".weapons").querySelectorAll(".weapon")];

    // Loop through each weapon div 
    weapons.forEach((weapon, index) =>{
        // Initialize weapon name, substat, description, image, 
        weapon.querySelector("#weapon-title").innerHTML = currentBuild.weapons[index].name;
        weapon.querySelector("#weapon-substat").innerHTML = currentBuild.weapons[index].substat;
        weapon.querySelector("#weapon-description").innerHTML = currentBuild.weapons[index].description;
        weapon.querySelector("#weapon-image").firstElementChild.src = currentBuild.weapons[index].image;
        weapon.querySelector("#weapon-image").firstElementChild.alt = currentBuild.weapons[index].name;
    });

    // Get the Artifacts div from the build 
    let artifacts = [...build.querySelector(".weapons-artifacts").querySelector(".artifacts").querySelectorAll(".artifact")];
    
    // Loop through each Artifact div
    artifacts.forEach((artifact, index) =>{
        // Initialize artifact name, substat, description, image, 
        artifact.querySelector("#artifact-title").innerHTML = currentBuild.artifacts[index].name;
        artifact.querySelector("#artifact-substats").innerHTML = currentBuild.artifacts[index].substat;
        artifact.querySelector("#artifact-description").innerHTML = currentBuild.artifacts[index].description;
        artifact.querySelector("#artifact-image").firstElementChild.src = currentBuild.artifacts[index].image;
        artifact.querySelector("#artifact-image").firstElementChild.alt = currentBuild.artifacts[index].name;
    }); 

});

// Change Abilities and Constellation Images 
[...document.getElementById("abilities").children].forEach((ability, index) => {
    ability.firstElementChild.src = character.abilities[index];
});
[...document.getElementById("constellations").children].forEach((constellation, index) => {
    constellation.firstElementChild.src = character.constellations[index];
});

// Change Lore
[...document.getElementById("background").children].forEach((story, index) =>{
    story.querySelector("#lore-title").innerHTML = character.lore[index].name;
    story.querySelector("#lore-story").innerHTML = character.lore[index].story;
});

[...document.getElementById("stories").children].forEach((story, index) =>{
    story.querySelector("#lore-title").innerHTML = character.lore[index + 3].name;
    story.querySelector("#lore-story").innerHTML = character.lore[index + 3].story;
})