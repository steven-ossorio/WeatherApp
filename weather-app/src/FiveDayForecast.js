import React, { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import "./FiveDayForecast.css";

class FiveDayForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weekDays: {},
      days: [],
      collection: {}
    };

    this.createDays = this.createDays.bind(this);
    this.createCollection = this.createCollection.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.createDays();
  }

  createDays() {
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
        let icon = weather.weather[0].icon;
        if (icon[icon.length - 1] === "d") {
          current = day;
          days.push(current);
          obj[current] = weather;
        }
      }
    });

    days.splice(days.length - 1, 1);

    this.setState({ days, weekDays: obj }, () => {
      this.createCollection();
    });
  }

  createCollection() {
    let collection = {};
    this.state.days.forEach((day, i) => {
      if (i === 0) {
        let arr = [];
        for (let j = 0; j < 8; j++) {
          arr.push(this.props.forecast[j]);
          collection[day] = arr;
        }
      } else if (Object.keys(collection).length < 5) {
        let arr = [];

        this.props.forecast.forEach(weather => {
          let date = new Date(weather.dt * 1000);
          let dayddd = moment(date).format("ddd");

          if (dayddd === day) {
            arr.push(weather);
          }
        });

        collection[day] = arr;
      }
    });

    this.setState({ collection });
  }

  render() {
    if (this.props.forecast.length === 0) {
      return <div />;
    }

    let nextDays = this.state.days.map((day, i) => {
      let weather = this.state.weekDays[day];

      return (
        <li
          onClick={() =>
            this.props.updateDayForecast(this.state.collection[day])
          }
          className="five-day-list"
          key={i}
        >
          <h3>{day}</h3>
          <div>
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

    let forecast = this.props.showFiveDay ? (
      <div>
        <h1 className="five-day-forecast-title">5 Day Forecast</h1>
        <ul className="five-day-forecast-container">{nextDays}</ul>
      </div>
    ) : (
      <h1
        className="five-day-forecast-title on-hover"
        onClick={this.props.funcShowFiveDay}
      >
        Show 5 Day Forecast?
      </h1>
    );

    return <div>{forecast}</div>;
  }
}

FiveDayForecast.propTypes = {
  funcShowFiveDay: PropTypes.func.isRequired,
  updateDayForecast: PropTypes.func.isRequired,
  showFiveDay: PropTypes.bool.isRequired,
  forecast: PropTypes.array.isRequired
};

export default FiveDayForecast;
