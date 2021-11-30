/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './Xiangling/images/xiangling1.webp',
    './Xiangling/images/xiangling2.webp',
    './Xiangling/images/xiangling3.webp',
    './Xiangling/images/xiangling4.webp',
    './Xiangling/images/xiangling5.webp',
    './Xiangling/images/xiangling6.webp',
]

// Get the container for the art from DOM 
const artwork = document.getElementById("art-section");

// Loop through each image container and set the image
links.forEach((imageLink) =>{
    const container = document.createElement("div");
    container.setAttribute("class", "image-video-container");
    const image = document.createElement("img");
    image.setAttribute("src", imageLink);
    image.setAttribute("alt", "artwork");
    container.appendChild(image);
    artwork.appendChild(container);
})