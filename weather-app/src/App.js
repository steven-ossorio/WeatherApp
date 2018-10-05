import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import weatherKey from "./keys/weatherApiKey";

class App extends Component {
  constructor(props) {
    super(props);

    this.getInfo = this.getInfo.bind(this);
  }

  getInfo() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=Berlin&APPID=${
          weatherKey.key
        }`
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.getInfo}>Get Info</button>
        </header>
      </div>
    );
  }
}

export default App;
