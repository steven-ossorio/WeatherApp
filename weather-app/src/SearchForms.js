import React, { Component } from "react";
import axios from "axios";
import weatherKey from "./keys/weatherApiKey";


class SearchForm extends Component {
  state = {
    city: ""
  };

  update = (field) => {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  onSubmit = e => {
    let { cities } = this.props;
    let cityId = cities[this.state.city];

    e.preventDefault();
    axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${
        weatherKey.key
      }`
    )
    .then(res => {
      this.props.updateWeather(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input placeholder="City" onChange={this.update("city")} value={this.state.city} type="text" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
