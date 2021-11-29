/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'Only when it snows like this would I prefer to be at home than in a book store. ',
    'I always have to put on an act around other people, because they see me only as the second son of the Feiyun Commerce Guild.',
    'Studiousness can hardly be considered a bad habit. There\'s not much more to it than that. Really.',
    'Had I no moral compass, my efforts would have been misguided. ',
    'Were it not for my capability, the cause that so inspires me would remain confined to the pages that extol its virtues.',
]

// Get the dom 
const randomQuote = document.getElementById('randomQuote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;