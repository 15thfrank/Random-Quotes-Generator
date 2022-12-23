let quoteText = document.getElementById("quote");
let quoteAuthor = document.getElementById("author");

let apiQuotes = [];

// New quote
function newQuote() {
    let quote = apiQuotes[Math.floor(Math.random() * (apiQuotes.length - 1))];
    quoteText.innerText = quote.text;
    if (quote.author != null) {
        quoteAuthor.innerText = quote.author;
    } else {
        quoteAuthor.innerText = "Anonymous";
    }
}

// Get quotes from API
async function getQuotes() {
    const apiURL = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiURL);
        apiQuotes =  await response.json();
        newQuote();
    } catch (error) {
        // Error handling
        console.log("Bad request. Retry.");
    }
}

// Run on load
getQuotes();

// Load new quote on click of New Quote button
const newQuoteBtn = document.getElementById("new-quote");
newQuoteBtn.addEventListener('click', newQuote);


// Tweet quote functionality
const tweetQuote = function() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ~ ${quoteAuthor.textContent} #Inspiration #InspirationalQuotes`;
    window.open(twitterURL, '_blank');
}

document.getElementById('twitter').addEventListener('click', tweetQuote);
