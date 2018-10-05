import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import weatherKey from "./keys/weatherApiKey";
import SearchForm from "./SearchForm";

class App extends Component {
  getInfo = () => {
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
  };
  render() {
    return (
      <div className="App">
        <SearchForm />
        <button onClick={this.getInfo}>Get Info</button>
      </div>
    );
  }
}

export default App;
