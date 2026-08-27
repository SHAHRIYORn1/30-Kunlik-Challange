const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        text: "Great things are done by a series of small things.",
        author: "Vincent van Gogh"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    }
];


let quoteBox = document.querySelector(".quote-box")


function nextQuote() {
    quoteBox.innerHTML = ''
    let random = Math.floor(Math.random() * quotes.length)
    let text = document.createElement("p")
    let author = document.createElement("p")


    text.textContent = quotes[random].text
    author.textContent = quotes[random].author

    quoteBox.appendChild(text)
    quoteBox.appendChild(author)
}

