document.addEventListener("DOMContentLoaded",start);

function start(){
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');

    getQuote();
    }

// async function getQuote(){
//     const uri = ''
// }
async function getQuote(){

const response = await response("https://api.quotable.io/random");
const data = await response.json();