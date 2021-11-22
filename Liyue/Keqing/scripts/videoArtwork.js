/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './Keqing/images/keqing7.jpg',
    './Keqing/images/keqing2.jpg',
    './Keqing/images/keqing3.png',
    './Keqing/images/keqing4.jpg',
    './Keqing/images/keqing5.png',
    './Keqing/images/keqing6.png',
    './Keqing/images/keqing1.jpg',
    './Keqing/images/keqing8.png',
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