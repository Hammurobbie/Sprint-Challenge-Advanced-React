import React from "react";
import "./App.css";
import axios from "axios";
import CardList from "./CardList";
import NavBar from "./NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: ""
    };
  }

  handleChanges = e => {
    this.setState({ search: e.target.value });
    console.log(this.state.search);
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({
          data: res.data
        });
        console.log(res.data);
      })
      .catch(e => alert(e.message));
  }

  render() {
    return (
      <div className="App">
        <NavBar search={this.search} handleChanges={this.handleChanges} />
        <CardList data={this.state.data} search={this.state.search} />
      </div>
    );
  }
}

export default App;
