import React, { Component } from "react";
import moment from "moment";
import "./FiveDayForecast.css";

class FiveDayForecast extends Component {
  state = {
    weekDays: {},
    days: []
  };
  render() {
    if (!this.props.forecast) {
      return <div />;
    }

    let obj = {};
    let days = [];
    let current;
    this.props.forecast.forEach((weather, i) => {
      let date = new Date(weather.dt * 1000);
      let day = moment(date).format("ddd");

      if (!current) {
        current = day;
        days.push(current);
        obj[current] = weather;
      }

      if (day !== current) {
        current = day;
        days.push(current);
        obj[current] = weather;
      }
    });

    let nextDays = days.map((day, i) => {
      let weather = obj[day];

      return (
        <li key={i}>
          <h3>{day}</h3>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${
                weather.weather[0].icon
              }.png`}
              alt=""
            />
          </div>
          <div>{Math.ceil(weather.main.temp)}</div>
        </li>
      );
    });

    return (
      <div>
        <h1>5 Day Forecast</h1>
        <ul className="five-day-forecast-container">{nextDays}</ul>
      </div>
    );
  }
}

export default FiveDayForecast;
