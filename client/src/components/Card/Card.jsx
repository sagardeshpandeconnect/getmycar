import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={props.img} />
      </div>
      <div className="cardContent">
        <h2>{props.name}</h2>
        <p className="price">
          {`Rs. ${props.price} Lakh `}
          <span>onwards</span>
        </p>
        <p>Avg ex showroom price</p>
        <a href="">Show price in my city</a>
      </div>
    </div>
  );
};

export default Card;
