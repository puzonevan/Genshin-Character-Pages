/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './Zhongli/images/zhongli1.webp',
    './Zhongli/images/zhongli2.webp',
    './Zhongli/images/zhongli3.webp',
    './Zhongli/images/zhongli4.webp',
    './Zhongli/images/zhongli5.webp',
    './Zhongli/images/zhongli6.webp',
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