import React, { Component } from "react";
import "./App.css";
import SearchForms from "./SearchForms";
import Nav from "./Nav";
import CityWeather from "./CityWeather";

class App extends Component {
  state = {
    forecast: {},
    current: {},
    currentForm: "city"
  };

  updateForecast = forecast => {
    this.setState({ forecast });
  };

  updateCurrent = current => {
    this.setState({ current });
  };

  updateForm = e => {
    let currentForm = e.target.value.toLowerCase();
    this.setState({ currentForm });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <input onClick={this.updateForm} value="City" type="button" />
        <input onClick={this.updateForm} value="Zip Code" type="button" />
        <input onClick={this.updateForm} value="Lat & Long" type="button" />
        <SearchForms
          updateForecast={this.updateForecast}
          updateCurrent={this.updateCurrent}
          currentForm={this.state.currentForm}
        />
        <CityWeather
          current={this.state.current}
          forecast={this.state.forecast}
        />
      </div>
    );
  }
}

export default App;
