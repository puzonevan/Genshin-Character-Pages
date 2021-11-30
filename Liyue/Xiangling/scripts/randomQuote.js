/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'I can\'t decide whether Pyro slimes taste better with salt and pepper or garlic and herbs?',
    'Any time, night or day, I am always willing to make dishes everyone loves.',
    'I love onions! I\'ve tried cutting them dozens of ways, and they still make me cry... No matter, I still love them!',
    'I\'ll eat absolutely anything! There are no bad ingredients, only bad cooking!',
    'My favorite thing to eat is... whatever exotic ingredient I haven\'t tried yet! No, I\'m not dodging the question, that\'s my honest answer!',
]

// Get the dom 
const randomQuote = document.getElementById('random-quote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;