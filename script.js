// get quotes from api

let apiQuotes = [];

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (e) {
    alert("Couldn't connect");
  }
}

// onLoad

getQuotes();

// Show new quote

function newQuote() {
  const newQuote = document.getElementById("new-quote");
  newQuote.addEventListener("click", function () {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    const quotes = document.getElementById("quote");

    quotes.innerHTML = `<p>${quote.text}</p>`;
    const author = document.getElementById("author");

    if (quote.author == null) {
      author.innerHTML = `<p>Unknown person</p>`;
    } else {
      author.innerHTML = `<p>${quote.author}</p>`;
    }
  });
}
