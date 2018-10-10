import React, { Component } from "react";
import weatherKey from "./keys/weatherApiKey";
import axios from "axios";

class SearchZipcode extends Component {
  state = {
    zip: "",
    country: ""
  };

  update = field => {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.country === "") {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?zip=${
            this.state.zip
          }&APPID=${weatherKey.key}&units=imperial`
        )
        .then(res => {
          this.props.updateCurrent(res.data);
        })
        .catch(err => {
          console.log(err);
        });

      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?zip=${
            this.state.zip
          }&APPID=${weatherKey.key}&units=imperial`
        )
        .then(res => {
          console.log(res);
          this.props.updateForecast(res.data.list);
        })
        .catch(err => {
          console.log(err);
        });

      this.setState({ zip: "" });
    } else {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?zip=${
            this.state.zip
          },${this.state.country}&APPID=${weatherKey.key}&units=imperial`
        )
        .then(res => {
          console.log(res);
          this.props.updateForecast(res.data.list);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            className="city-search-button"
            placeholder="Zip Code"
            onChange={this.update("zip")}
            value={this.state.zip}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SearchZipcode;
