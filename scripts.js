let apiQuotes = [];

// New quote
function newQuote() {
    let quote = apiQuotes[Math.floor(Math.random() * (apiQuotes.length - 1))];
    document.getElementById("quote").innerText = quote.text;
    if (quote.author != null) {
        document.getElementById("author").innerText = quote.author;
    } else {
        document.getElementById("author").innerText = "Anonymous";
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
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener('click', newQuote)