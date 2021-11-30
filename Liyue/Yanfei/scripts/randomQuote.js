/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'I\'ll remind you again: The law can be both a help and a hindrance.',
    'Sometimes the law is compatible with human nature, but sometimes the two conflict. Balancing the two is a discipline in its own right...',
    '"Do not seek to emulate the past, for there is no law that can suffice for all time".',
    'Only by adhering to the law can the people solve life\'s myriad of problems',
    'Studying the law allows one to have grounded conversations, whilst learning martial arts allows one to prevail against groundless violence.',   
]

// Get the dom 
const randomQuote = document.getElementById('random-quote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;