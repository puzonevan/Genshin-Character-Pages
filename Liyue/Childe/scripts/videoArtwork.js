/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './RaidenShogun/images/raiden6.jpg',
    './RaidenShogun/images/raiden1.jpg',
    './RaidenShogun/images/raiden2.jpg',
    './RaidenShogun/images/raiden4.jpg',
    './RaidenShogun/images/raiden5.jpg',
    './RaidenShogun/images/raiden8.jpg',
    './RaidenShogun/images/1165476.png',
    './RaidenShogun/images/1165491.jpg',
    './RaidenShogun/images/raiden3.jpg',
]

// Get the container for the art from DOM 
const artwork = [...document.getElementsByClassName("lore-container")];

// Loop through each image container and set the image
artwork.forEach((container, index) =>{
    container.firstElementChild.src = links[index];
    container.firstElementChild.alt = "artwork";
})