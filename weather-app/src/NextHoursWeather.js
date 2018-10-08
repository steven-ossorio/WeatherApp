import React, { Component } from "react";
import moment from "moment";
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
          <div>{moment(date).format("LT")}</div>
          <div>
            {" "}
            <img
              src={`http://openweathermap.org/img/w/${
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

export default NextHoursWeather;
