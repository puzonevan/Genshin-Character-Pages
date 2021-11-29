/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'I\'m Beidou. You\'ve heard of my ship, The Crux, and its crew? If you too love adventure, then join me. I\'ve got your back.',
    'Time moves quickly. Haha, go, may the wind be at your back.',
    'We\'re setting sail! Men, to your posts! A new adventure is about to begin!',
    'I chose you as my crewmate, as my comrade on the sea. It gives me great pride to be able to say that.',
    'If you can change something, change it. If you can\'t, don\'t waste time thinking about it. That\'s how I go about things.',
]

// Get the dom 
const randomQuote = document.getElementById('randomQuote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;