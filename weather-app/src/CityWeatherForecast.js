import React, { Component } from "react";
import moment from "moment";

class CityWeatherForecast extends Component {
  render() {
    let { list } = this.props.forecast;
    let nextFewHours = [];
    if (list) {
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
            <div>{Math.ceil((current.main.temp - 273.15) * (9 / 5) + 32)}</div>
          </li>
        );
      });
    }

    return (
      <div>
        <h1>Forecast the weather</h1>
        <div>{nextFewHours}</div>
      </div>
    );
  }
}

export default CityWeatherForecast;
