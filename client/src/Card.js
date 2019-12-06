import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  background-color: rgba(211, 211, 211, 0.75);
  margin: 3% 10% 3% 10%;
  padding: 2% 0 2% 0;
  a {
    text-decoration: none;
    color: #6a99af;
  }
`;

const H2 = styled.h2`
  color: #6a99af;
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
