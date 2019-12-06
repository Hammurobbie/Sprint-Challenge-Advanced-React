import React from "react";

const Card = props => {
  return (
    <div>
      <h2>{props.data.name}</h2>
      <p>{props.data.country}</p>
      <p>Searches: {props.data.searches}</p>
    </div>
  );
};

export default Card;
