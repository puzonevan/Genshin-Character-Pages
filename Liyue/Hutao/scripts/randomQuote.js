/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'Oh, you sleepy? Get some rest, I\'m gonna take a walk by myself...',
    'Have you seen Qiqi? Tell me where she is, quickly. I need to go seal her away, hee-hee!',
    'Wanna come over for tea?',
    'Hu as in "Who put me in this coffin?" and Tao as in "I can\'t geT OUt!" Hehe... No, not funny?',
    'yahoo',
]

// Get the dom 
const randomQuote = document.getElementById('random-quote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;