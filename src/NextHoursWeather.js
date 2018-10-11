import React, { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import "./NextHoursWeather.css";

class NextHoursWeather extends Component {
  render() {
    if (this.props.nextHours === undefined) {
      return <div />;
    }

    let hoursList = this.props.nextHours.slice(0, 8).map((weather, i) => {
      let date = new Date(weather.dt * 1000);
      return (
        <li key={i}>
          <div className="next-hours-container-time">
            {moment(date).format("LT")}
          </div>
          <div className="next-hours-container-description">
            {weather.weather[0].description}
          </div>
          <div>
            {" "}
            <img
              src={`https://openweathermap.org/img/w/${
                weather.weather[0].icon
              }.png`}
              alt=""
            />
          </div>
          <div>
            {Math.ceil(weather.main.temp)}
            {"\u2109"}
          </div>
        </li>
      );
    });
    return <div className="next-hours-container">{hoursList}</div>;
  }
}

NextHoursWeather.propTypes = {
  nextHours: PropTypes.array.isRequired
};

export default NextHoursWeather;
