/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './Hutao/images/hutao7.jpg',
    './Hutao/images/hutao8.jpg',
    './Hutao/images/hutao9.jpg',
    './Hutao/images/hutao3.png',
    './Hutao/images/hutao4.jpg',
    './Hutao/images/hutao6.jpg',
    './Hutao/images/hutao1.png',
    './Hutao/images/hutao2.jpg',
    './Hutao/images/hutao5.png',
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