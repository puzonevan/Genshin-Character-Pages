# Genshin-Character-Pages
 
[Github Pages](https://puzonevan.github.io/Genshin-Character-Pages/)

## Overview 
There are plenty of information sites about Genshin Impact, the characters, game statistics, etc. However, my information site about the characters in the game focuses on **only the characters** and showcases only what most players need which are **materials**, **builds**, and **ability descriptions**. 

This project started out as only one character: [Ganyu](https://puzonevan.github.io/Ganyu/). After a 2-3 months finishing the Ganyu site, I attempted to create another character site for the [Raiden Shogun](https://puzonevan.github.io/RaidenShogun/) and this took around half a month since most of the template was created from the Ganyu site. 

## Goal 
My goal was to create a site for every character, but after realizing how long each individual character site took, I needed a different approach. 

## Solutions
I implemented the fetch api in order to acquire all of the data I needed from [Genshin DB](https://github.com/theBowja/genshin-db). Additionally, I needed to reformat the html and styling so that they could be universal in every page. 

Then, all I would have to manually do was gather the fan art for images, acquire the gif for the main menu, create a color palette for each character, and change the details in the corresponding character.js file. 

### Inspiration Sites
- [Genshin Wiki](https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki)
- [Genshin gg](https://genshin.gg/)

### Credits
[Genshin gg](https://genshin.gg/) | [Game8](https://game8.co/games/Genshin-Impact)
- Build descriptions, weapons, and artifacts

[Genshin DB](https://github.com/theBowja/genshin-db) 
- Data for fetch api

---

## Design 
Each character is divided into 5 sections: 
1. **Title**    
    The title section includes the ***name*** of the character as the main title, a ***sub title***, and sometimes a ***randomized quote*** by the character

2. **Materials**   
    This section includes the necessary ***materials*** and ***amounts*** in order to ***level up*** the character and their ablities to the max 

3. **Builds**   
    There are two builds containing ***weapons*** and ***artifacts*** that the character should use in the game

4. **Abilities**    
    This section includes ***abilities***(including ***passives***) and ***constellations*** of the character

5. **Images**   
    Lastly, why not include some ***fan art*** of the character. 

---

## Features
- Randomized quotes on refresh 
- Custom made svg images
- Links to all materials, weapons, artifacts, etc.

--- 

## What have I learned? 
- Fetch API 
- Creating custom svg's 
- Lighthouse performance, accessibility, and best practices
- Color palettes 

--- 

## To Be Added Features
- Change material amounts based on level 
