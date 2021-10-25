/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'The world remains constant over the centuries. But human life is like the dew at dawn or a bubble rising through water. Transitory.', 
    'All the world holds dear is but a backdrop of constant motion. I stand before it alone and unchanging.', 
    'Inactivity serves no purpose whatsoever. Hmph.', 
    'I command the thunder in all corners of the world to cease. Rest well tonight.', 
    'Don\'t try and get me to cook. I can take care of anything else, but not that.',
    'Foolish question. There are only two kinds of things — those that must be done and those that must not.',
    'Her body may have perished, but she became the Sacred Sakura. This, too, is a form of Eternity.'
]

// Get the dom 
const randomQuote = document.getElementById('randomQuote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;