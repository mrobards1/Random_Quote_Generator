
import React from "https://esm.sh/react";
import { createRoot } from 'react-dom';
import './App.css';


const quoteData = [
  {
    text: `"The only thing we have to fear is fear itself."`,
    author: "Franklin D. Roosevelt"
  },
  { text: `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."`, author: "Hellen Keller" },
  { text: `"Do one thing every day that scares you."`, author: "Eleanor Roosevelt" },
  { text: `"Well done is better than well said."`, author: "Benjamin Franklin" },
  { text: `"Be yourself; everyone else is already taken."`, author: "Oscar Wilde" },
  { text: `"Never let the fear of striking out keep you from playing the game."`, author: "Babe Ruth" }
];

const QuoteBox = (props) => (
  <div id="main">
    <div id="quote-box">
      <h1 id="text">{props.quote.text}</h1>
      <p id="author">- {props.quote.author}</p>
      <button id="new-quote" onClick={props.handleNextQuote}>
        Next Quote
      </button>
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
        Tweet
      </a>
    </div>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quoteData[0]
    };
  }

  randQuote = () => {
    return Math.floor(Math.random() * quoteData.length);
  };

  handleNextQuote = () => {
    this.setState({
      quote: quoteData[this.randQuote()]
    });
  };

  render() {
    return (
      <QuoteBox
        quote={this.state.quote}
        handleNextQuote={this.handleNextQuote}
      />
    );
  }
}





export default App;