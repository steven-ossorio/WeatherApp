import React, { Component } from "react";
import axios from "axios";
import weatherKey from "./keys/weatherApiKey";
import PropTypes from "prop-types";
import * as Cities from "./keys/citiesJson.json";
import "./SearchCity.css";

class SearchCity extends Component {
  state = {
    city: "",
    cities: {}
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

  update = field => {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  };

  onSubmit = e => {
    let cityName = this.state.city.split(" ");
    cityName = cityName
      .map(city => city.charAt(0).toUpperCase() + city.slice(1))
      .join(" ");

    let cityId = this.state.cities[cityName];

    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${
          weatherKey.key
        }&units=imperial`
      )
      .then(res => {
        this.props.updateCurrent(res.data);
        this.setState({ city: "" });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${
          weatherKey.key
        }&units=imperial`
      )
      .then(res => {
        this.props.updateForecast(res.data.list);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            className="city-search-button"
            placeholder="City"
            onChange={this.update("city")}
            value={this.state.city}
            type="text"
          />
        </form>
      </div>
    );
  }
}

SearchCity.propTypes = {
  updateCurrent: PropTypes.func.isRequired,
  updateForecast: PropTypes.func.isRequired
};

export default SearchCity;
