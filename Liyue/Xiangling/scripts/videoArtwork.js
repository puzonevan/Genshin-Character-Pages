/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './Xiangling/images/xiangling1.jpg',
    './Xiangling/images/xiangling2.jpg',
    './Xiangling/images/xiangling3.jpg',
    './Xiangling/images/xiangling4.jpg',
    './Xiangling/images/xiangling5.jpg',
    './Xiangling/images/xiangling6.jpg',
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