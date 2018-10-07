import React, { Component } from "react";

class CityWeather extends Component {
  render() {
    let { city, list } = this.props.forecast;

    if (Object.keys(this.props.forecast).length === 0) {
      return <div>No City Loaded</div>;
    }

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

    return (
      <div>
        <h1>{city.name}</h1>
        <h2>{city.country}</h2>
        <ul>{forecast}</ul>
      </div>
    );
  }
}

export default CityWeather;
