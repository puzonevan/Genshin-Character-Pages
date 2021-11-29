/**
 * Random Quote Generator 
 *      - Change the quotes below based on the character 
 */

const quotes = [
    'In adventuring, as in business, you always have to seize the opportunity while it\'s there.',
    'If you feel strongly about something, you should speak up and take action. That\'s the philosophy I live by.',
    'Nothing exists independently, and there\'s nothing you can do to change that. So, when you drag your heels on one thing, you\'re actually causing chaos for a whole bunch of other connected issues, too.',
    'That indulgent feeling of being spoilt for choice between countless different varieties... That, to me, is the appeal of shopping.',
    'When your heart is set on something, you get closer to your goal with each passing day.',
]

// Get the dom 
const randomQuote = document.getElementById('randomQuote');

// Function to change quote randomly 
const getRandomQuote = (e) =>{
    randomQuote.innerHTML = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// Set to change randomly on load 
window.onload = getRandomQuote;