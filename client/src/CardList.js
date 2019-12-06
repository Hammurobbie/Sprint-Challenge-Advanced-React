import React from "react";
import Card from "./Card";

const CardList = props => {
  return (
    <div>
      {props.data
        .filter(ath => ath.name.includes(props.search))
        .map(ath => (
          <Card key={ath.id} data={ath} />
        ))}
    </div>
  );
};

export default CardList;
