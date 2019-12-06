import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  background-color: #8f95a3;
  margin: 3% 10% 3% 10%;
  padding: 2% 0 2% 0;

  p {
    color: #f2f5e3;
  }
  a {
    text-decoration: none;
    color: #f2f5e3;
  }
`;

const Card = props => {
  return (
    <CardDiv>
      <h2>{props.data.name}</h2>
      <p>{props.data.country}</p>
      <p>Searches: {props.data.searches}</p>
    </CardDiv>
  );
};

export default Card;
