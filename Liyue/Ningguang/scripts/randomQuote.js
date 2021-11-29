/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'Even if an antique is priceless, the happiness it brings lasts for only the moment you obtain it.',
    'We should look for a new investment. Mora doesn\'t grow on trees.',
    'You can learn from me, and use Mora to make things a little easier on yourself. But remember, relationships built on Mora can only be relied on for a time.',
    'There\'s no style in resorting to violence, it\'s simply the worst of all the bad decisions you could make.',
    'Cashing in time and Mora for power... Interesting. This shows their true value.',
]

// Get the dom 
const randomQuote = document.getElementById('randomQuote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;