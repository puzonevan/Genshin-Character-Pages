/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'If there\'s fire in your soul, you gotta rock \'n\' roll. So c\'mon! Let\'s get movin\'!',
    'Thanks for staying to jam with me!',
    'That\'s the groove, alright! That\'s what I\'m talking about!',
    'I\'m on fire lately. Look out for my next performance!',
    'It\'ll be your song - and I\'ll play it just for you!',
]

// Get the dom 
const randomQuote = document.getElementById('random-quote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;