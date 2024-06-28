const quotes = [
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen.",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "In the end, its not the years in your life that count. Its the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
