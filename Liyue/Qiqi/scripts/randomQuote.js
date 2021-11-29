/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'I am Qiqi. I am a zombie. And I forgot what comes next.',
    'One, two, three, four. Two, two, three, four...',
    'Hold my hand please. This wind could blow me away.',
    'Morning means it\'s time to check my diary. Because my diary reminds me what I\'m supposed to do in the morning.',
    ' I like coconut milk... But, I don\'t know what it tastes like.', 
]

// Get the dom 
const randomQuote = document.getElementById('randomQuote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;