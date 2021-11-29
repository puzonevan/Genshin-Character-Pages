/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'Every journey has its final day. Don\'t rush.',
    'I hope today too shall be prosperous.',
    'Gold is Liyue\'s treasure. It is the blood that runs through her heart.',
    'Nothing can be accomplished without rules or standards. No matter if it is mortals or adepti, everyone has their place. ',
    'Visions... are also a type of contract. You should know that all power comes at a price. For every bit of power you gain, so too do you gain more responsibility.',
]

// Get the dom 
const randomQuote = document.getElementById('randomQuote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;