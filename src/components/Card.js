import React from 'react';
import "./Card.css";

const Card = (props) => {
  const clickHandle = event => {
    if(props.lockBoard === true) return;
    if(props.status === false) return;
    
    props.clicked(event);
  }

  return (
    <div className="Card" onClick={clickHandle} data-check={props.name}>
      <div className="front-face">
        <img src="img/react-original.svg" alt="react-original.svg" />
      </div>

      <div className="back-face">
        <img src={"img/" + props.name} alt={props.name} />
      </div>
    </div>
  );
};

export default Card;