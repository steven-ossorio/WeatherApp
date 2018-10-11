import React, { Component } from "react";
import moment from "moment";
import "./CurrentWeather.css";

class CurrentWeather extends Component {
  render() {
    let { weather, sys, name, main, dt } = this.props.current;
    let date = new Date(dt * 1000);

    return (
      <div className="current-weather-container">
        <h1 className="current-weather-container-title">Current Weather</h1>
        <div className="current-weather-container-location">
          <div>
            {name}, {sys.country}
          </div>
        </div>
        <div className="current-weather-container-time">
          <div>
            {moment(date).format("dddd")} {moment(date).format("LT")}
          </div>
        </div>
        <div className="current-weather-container-description">
          {weather[0].description}
        </div>
        <div className="current-weather-container-temp">
          <div className="current-weather-container-temp-img">
            <img
              src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
              alt=""
            />
          </div>
          <div className="current-weather-container-temp-num">
            {Math.ceil(main.temp)}
            {"\u2109"}
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
