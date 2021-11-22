/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './Ningguang/images/ningguang4.jpg',
    './Ningguang/images/ningguang5.png',
    './Ningguang/images/ningguang6.jpg',
    './Ningguang/images/ningguang2.png',
    './Ningguang/images/ningguang3.jpg',
    './Ningguang/images/ningguang1.png',
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