const author_name = document.getElementById("author");
const quote = document.getElementById("quote");
const tweetbtn = document.getElementById('tweet-share');

const nextbtn = document.getElementById('next-btn');

nextbtn.addEventListener('click',getQuote);
tweetbtn.addEventListener('click',share);

async function getQuote() {
  try {
    const api_url = 'https://api.quotable.io/random';

    const response = await fetch(api_url);
    const data = await response.json();

    const {content,author} = data;

    quote.innerText = `${content}`;
    author_name.innerText = `- ${author}`;

  } catch (error) {
    console.log("Error fetching the API!");
  }
}

function share(){
    tweetbtn.href="https://twitter.com/intent/tweet?text="+encodeURIComponent(quote.innerText);
}