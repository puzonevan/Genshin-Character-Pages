/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'Many mortals fear lightning... Incomprehensible. Fear of something so common.',
    'I\'m far from human. I can\'t make much of human emotions.',
    'Do not fall prey to the darkness. I have no mercy.Though perhaps you can stand your ground alone.',
    'The taste of Almond Tofu feels like a fond dream...',
    'New power? All it will be used for is death.',    
]

// Get the dom 
const randomQuote = document.getElementById('random-quote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;