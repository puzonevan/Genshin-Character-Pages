/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './Qiqi/images/qiqi4.webp',
    './Qiqi/images/qiqi2.webp',
    './Qiqi/images/qiqi3.webp',
    './Qiqi/images/qiqi1.webp',
    './Qiqi/images/qiqi5.webp',
    './Qiqi/images/qiqi6.webp',
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