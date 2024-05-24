
// var quoteCreater = document.getElementById("quoteCreater");
    var quote = document.getElementById("quote");
    var quoteWriter = document.getElementById("quoteWriter");



    var quoteList = [
        {
          quote: "Be yourself; everyone else is already taken.",
          quoter: "Oscar Wilde",
        },
        {
          quote: "“So many books, so little time.”",
          quoter: "Frank Zappa",
        },
        {
          quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
          quoter: "Albert Einstein",
        },
        {
          quote: "“A room without books is like a body without a soul.”",
          quoter: "Marcus Tullius Cicero",
        },
        {
          quote: "“You only live once, but if you do it right, once is enough.”",
          quoter: "Mae West",
        },
        {
          quote: "“Be the change that you wish to see in the world.”",
          quoter: "Mahatma Gandhi",
        },
        {
          quote: "“If you tell the truth, you don't have to remember anything.”",
          quoter: "Mark Twain",
        },
        {
          quote: "“A friend is someone who knows all about you and still loves you.”",
          quoter: "Elbert Hubbard",
        },
        {
          quote: "“Always forgive your enemies; nothing annoys them so much.”",
          quoter: "Oscar Wilde",
        },
        {
          quote: "“We accept the love we think we deserve.”",
          quoter: "Stephen Chbosky",
        },
    ];






var selectedItem;

function onButtonClick() {

  var randomIndex = Math.floor(Math.random() * quoteList.length);

  if (selectedItem != undefined && selectedItem.quote == quoteList[randomIndex].quote) {
    onButtonClick();
    return;
  }

  selectedItem = quoteList[randomIndex];

  quote.innerHTML = '<span>' + selectedItem.quote +'</span>';
  quoteWriter.innerHTML = '<span>' + selectedItem.quoter +'</span>';


}