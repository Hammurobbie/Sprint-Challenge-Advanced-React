import React from "react";
import "./App.css";
import axios from "axios";
import CardList from "./CardList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

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
        <h1>Women's World Cup Most Searched Athletes</h1>
        <CardList data={this.state.data} />
      </div>
    );
  }
}

export default App;
