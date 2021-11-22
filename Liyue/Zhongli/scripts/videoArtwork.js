/**
 * Videos and Artwork
 *      - Change the directory links below based on the character 
 *      - Change the video links below based on the character (TBA)
 */

const links = [
    './Zhongli/images/zhongli1.jpg',
    './Zhongli/images/zhongli2.png',
    './Zhongli/images/zhongli3.jpg',
    './Zhongli/images/zhongli4.jpg',
    './Zhongli/images/zhongli5.png',
    './Zhongli/images/zhongli6.jpg',
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