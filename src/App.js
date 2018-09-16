import React, { Component } from "react";
import "./App.css";
import Cards from "./components/Cards";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        "angularjs-original.svg",
        "babel-original.svg",
        "backbonejs-original.svg",
        "chrome-original.svg",
        "d3js-original.svg",
        "firefox-original.svg",
        "html5-original.svg",
        "ie10-original.svg",
        "jquery-original.svg",
        "mongodb-original.svg",
        "nodejs-original.svg",
        "typescript-original.svg",
        "vuejs-original.svg",
        "webpack-original.svg",
        "javascript-original.svg"
      ],
      cardsRemove: [],
      cardOne: null,
      cardTwo: null,
      lockBoard: false
    };
  }

  handleClick = event => {
    const target = event.target.parentElement.parentElement;

    target.classList.add("active");

    if (this.state.cardOne === target) return;

    if (this.state.cardOne === null) {
      this.setState({
        cardOne: target
      });
    } else {
      this.setState({
        cardTwo: target,
        lockBoard: true
      });

      setTimeout(() => {
        this.checkCard();
      }, 800);
    }
  };

  checkCard = () => {
    if (this.state.cardOne.dataset.check === this.state.cardTwo.dataset.check) {
      const name = this.state.cardOne.dataset.check;

      const arr = [...this.state.cardsRemove];

      arr.push(name);

      this.setState({
        cardsRemove: arr,
        cardOne: null,
        cardTwo: null,
        lockBoard: false
      });
    } else {
      this.state.cardOne.classList.remove("active");
      this.state.cardTwo.classList.remove("active");

      this.setState({
        cardOne: null,
        cardTwo: null,
        lockBoard: false
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Cards
          cards={this.state.cards}
          clicked={this.handleClick}
          lockBoard={this.state.lockBoard}
          cardsRemove={this.state.cardsRemove}
        />
      </div>
    );
  }
}

export default App;
