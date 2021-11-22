/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './HuTao/images/hutao7.jpg',
    './HuTao/images/hutao8.jpg',
    './HuTao/images/hutao9.jpg',
    './HuTao/images/hutao3.png',
    './HuTao/images/hutao4.jpg',
    './HuTao/images/hutao6.jpg',
    './HuTao/images/hutao1.png',
    './HuTao/images/hutao2.jpg',
    './HuTao/images/hutao5.png',
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