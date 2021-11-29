/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    '"Heart be pure, evil be erased. Mind be purged, world be..." Um... Ugh, I always forget that last part.',
    'There is no purer form of water than rain. It can aid us greatly in the purging of evil.',
    'It is unwise to waste the precious morning hours. Time to train!',
    'Waiting for evil to show up at the doorstep will get you nowhere — you have to go out and hunt it down. ',
    'Visions are powerful, but one would be foolish to place blind faith in them.',
]

// Get the dom 
const randomQuote = document.getElementById('randomQuote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;