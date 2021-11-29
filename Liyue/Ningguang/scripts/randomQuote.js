/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    '',
    '',
    '',
    '',
    '',
]

// Get the dom 
const randomQuote = document.getElementById('randomQuote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;