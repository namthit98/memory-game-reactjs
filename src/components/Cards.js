import React, { Component } from "react";
import "./Cards.css";
import Card from "./Card";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: true,
      arr: this.shuffle([...this.props.cards, ...this.props.cards])
    }
  }

  render() {
    // console.log(this.props.cardsRemove);

    const elCards = this.state.arr.map(
      (el, idx) => {
        if(this.props.cardsRemove.includes(el)) {
          return (
            <Card
              key={idx}
              name={el}
              clicked={this.props.clicked}
              lockBoard={this.props.lockBoard}
              status={false}
            />
          );
        } else {
          return (
            <Card
              key={idx}
              name={el}
              clicked={this.props.clicked}
              lockBoard={this.props.lockBoard}
              status={true}
            />
          );
        }        
      }
    );

    return <div className="Cards">{elCards}</div>;
  }

  shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
}

export default Cards;
