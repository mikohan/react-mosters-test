import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, i) => (
          <h1 key={i}>{monster.name}</h1>
        ))}
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
}

export default App;
