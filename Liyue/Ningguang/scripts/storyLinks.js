/**
 * Story Links 
 *      - change the links below for different characters
 *      - should at least be three background & 5 story cards 
 */

const storyLinks = [
    "https://genshin-impact.fandom.com/wiki/Ganyu#Profile",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#Vision",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#The_Flora_of_Yujing_Terrace",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#Story_1",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#Story_2",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#Story_3",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#Story_4",
    "https://genshin-impact.fandom.com/wiki/Ganyu/Story#Story_5",
]

const background = [...document.getElementById("background").children];
const stories = [...document.getElementById("stories").children];

// Loop through each background card story 
background.forEach((card, index) =>{
    
    let button = card.lastElementChild;
    
    // Event: background information on click 
    button.addEventListener("click", () =>{
        window.open(storyLinks[index], "_blank");
    });

    
        

});

// Loop through each story card for the character
stories.forEach((card, index) =>{
    
    let button = card.lastElementChild; 

    // Event: story information on click
    button.addEventListener("click", () =>{
        window.open(storyLinks[index + 3], "_blank");
    });

})