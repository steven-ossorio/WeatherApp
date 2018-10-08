import React, { Component } from "react";
import moment from "moment";

class CityWeather extends Component {
  render() {
    let { city, list } = this.props.forecast;

    if (Object.keys(this.props.forecast).length === 0) {
      return <div>No City Loaded</div>;
    }

    let { weather, sys, name, main, id, dt } = this.props.current;
    let date = new Date(dt * 1000);

    let forecast = list.map((current, i) => {
      let time = current.dt_txt + " utc";
      time = new Date(time);
      return (
        <li key={i}>
          {time.toString()}
          <img
            src={`http://openweathermap.org/img/w/${
              current.weather[0].icon
            }.png`}
            alt=""
          />
        </li>
      );
    });

    let nextFewHours = [];
    for (let i = 0; i < 9; i++) {
      nextFewHours.push(list[i]);
    }

    nextFewHours = nextFewHours.map((current, i) => {
      let date = new Date(current.dt * 1000);
      console.log(date);
      return (
        <li key={i}>
          <div>{moment(date).format("LT")}</div>
          <div>
            {" "}
            <img
              src={`http://openweathermap.org/img/w/${
                current.weather[0].icon
              }.png`}
              alt=""
            />
          </div>
          <div>
            {Math.ceil((current.main.temp - 273.15) * (9 / 5) + 32)}
            {"\u2109"}
          </div>
        </li>
      );
    });

    return (
      <div>
        <div className="current-weather-container">
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
              {Math.ceil((main.temp - 273.15) * (9 / 5) + 32)}
            </div>
          </div>
        </div>
        <div>{nextFewHours}</div>
        {/* <ul>{forecast}</ul> */}
      </div>
    );
  }
}

export default CityWeather;
