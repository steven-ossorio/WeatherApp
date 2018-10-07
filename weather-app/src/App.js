import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import SearchForms from "./SearchForms";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./CityWeatherForecast";

class App extends Component {
  state = {
    forecast: {},
    current: {},
    hourlyForecast: [],
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
    console.log(this.state);
    let currentWeather =
      Object.keys(this.state.current).length === 0 ? (
        ""
      ) : (
        <CurrentWeather current={this.state.current} />
      );
    return (
      <div className="App">
        <Nav />
        <input onClick={this.updateForm} value="City" type="button" />
        <input onClick={this.updateForm} value="Zip Code" type="button" />
        <SearchForms
          updateForecast={this.updateForecast}
          updateCurrent={this.updateCurrent}
          currentForm={this.state.currentForm}
        />
        {currentWeather}
        <Forecast forecast={this.state.forecast} />
      </div>
    );
  }
}

export default App;
