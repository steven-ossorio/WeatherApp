import React, { Component } from "react";
import "./App.css";
import SearchForms from "./SearchForms";
import Nav from "./Nav";
import * as Cities from "./keys/citiesJson.json";
import CityWeather from "./CityWeather";

class App extends Component {
  state = {
    forecast: {},
    cities: {},
    current: {}
  };

  componentDidMount() {
    if (Object.keys(this.state.cities).length === 0) {
      let cities = {};
      Cities.default.forEach(city => {
        cities[city.name] = city.id;
      });

      this.setState({ cities });
    }
  }

  updateForecast = forecast => {
    this.setState({ forecast });
  };

  updateCurrent = current => {
    this.setState({ current });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Nav />
        <SearchForms
          updateForecast={this.updateForecast}
          updateCurrent={this.updateCurrent}
          cities={this.state.cities}
        />
        <CityWeather forecast={this.state.forecast} />
      </div>
    );
  }
}

export default App;
