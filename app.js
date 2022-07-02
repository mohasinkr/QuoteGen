const author = document.getElementById("author");
const quote = document.getElementById("quote");
const tweetbtn = document.getElementById('tweet-share');

const nextbtn = document.getElementById('next-btn');

nextbtn.addEventListener('click',getQuote);
tweetbtn.addEventListener('click',share);

async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const responseJSON = await response.json();
    quote.innerText = `${responseJSON.content}`;
    author.innerText = `- ${responseJSON.author}`;

  } catch (error) {
    console.log("Error fetching the API!");
  }
}

function share(){
    tweetbtn.href="https://twitter.com/intent/tweet?text="+encodeURIComponent(quote.innerText);
}