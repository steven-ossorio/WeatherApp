import React, { Component } from "react";
import "./App.css";
import SearchForms from "./SearchForms";
import Nav from "./Nav";
import * as Cities from './keys/citiesJson.json' 

class App extends Component {
  state = {
    weather: {},
    cities: {}
  };

  componentDidMount(){
    if (Object.keys(this.state.cities).length === 0) {
      let cities = {};
      Cities.default.forEach(city => {
        cities[city.name] = city.id
      })

      this.setState({ cities })
    }
  }

  updateWeather = data => {
    this.setState({ weather: data })
  }

  render() {
    console.log(this.state.weather)
    return (
      <div className="App">
        <Nav />
        <SearchForms updateWeather={this.updateWeather} cities={this.state.cities} />
        <CityWeather>
      </div>
    );
  }
}

export default App;
