/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './Hutao/images/hutao7.webp',
    './Hutao/images/hutao8.webp',
    './Hutao/images/hutao9.webp',
    './Hutao/images/hutao3.webp',
    './Hutao/images/hutao4.webp',
    './Hutao/images/hutao6.webp',
    './Hutao/images/hutao1.webp',
    './Hutao/images/hutao2.webp',
    './Hutao/images/hutao5.webp',
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