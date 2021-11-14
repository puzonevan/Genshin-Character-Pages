/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './Beidou/images/beidou1.jpg',
    './Beidou/images/beidou2.jpg',
    './Beidou/images/beidou3.png',
]

// Get the container for the art from DOM 
const artwork = [...document.getElementsByClassName("lore-container")];

// Loop through each image container and set the image
artwork.forEach((container, index) =>{
    container.firstElementChild.src = links[index];
    container.firstElementChild.alt = "artwork";
})