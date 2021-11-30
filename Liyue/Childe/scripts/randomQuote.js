/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'The world looks glorious in the snow. Pure white, like the light of the moon. A perfect backdrop for bloodshed.',
    'If you make a promise, you keep it. If you make a mistake, you apologize...',
    'A warrior must always be ready to face any challenge with his blade.',
    'The skeletal-white snowscape devours life without leaving any trace. It is the invisible enemy we fight against each day.',
    'It\'s been years since I last saw my master. I should hope that next we meet, I\'ll at least be able to force her to use both hands to beat me...',
]

// Get the dom 
const randomQuote = document.getElementById('random-quote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;