import React from "react";
import useDarkMode from "./hooks/UseDarkMode";
import styled from "styled-components";

const TogDiv = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-around;
`;

const NavBar = props => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's World Cup Most Searched Athletes</h1>
      <input
        className={darkMode ? "dark-mode-input" : "light-mode-input"}
        placeholder="Search"
        onChange={props.handleChanges}
        value={props.search}
      />
      <TogDiv>
        <h4>{darkMode ? "Light Mode" : "Dark Mode"}</h4>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
      </TogDiv>
    </nav>
  );
};

export default NavBar;
