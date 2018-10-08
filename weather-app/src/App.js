import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import SearchForms from "./SearchForms";
import CurrentWeather from "./CurrentWeather";
import NextHoursWeather from "./NextHoursWeather";
import FiveDayForecast from "./FiveDayForecast";
import Footer from "./Footer";

class App extends Component {
  state = {
    forecast: {},
    current: {},
    currentForm: "city",
    showFiveDay: false
  };

  updateForecast = forecast => {
    this.setState({ forecast, showFiveDay: false });
  };

  updateCurrent = current => {
    this.setState({ current, showFiveDay: false });
  };

  updateForm = e => {
    let currentForm = e.target.value.toLowerCase();
    this.setState({ currentForm });
  };

  showFiveDay = () => {
    this.setState({ showFiveDay: true });
  };

  render() {
    console.log(this.state);
    let currentWeather =
      Object.keys(this.state.current).length === 0 ? (
        ""
      ) : (
        <CurrentWeather current={this.state.current} />
      );
    return (
      <div className="App">
        <Nav />
        <input
          className="select-form"
          onClick={this.updateForm}
          value="City"
          type="button"
        />
        <input
          className="select-form"
          onClick={this.updateForm}
          value="Zip Code"
          type="button"
        />
        <SearchForms
          updateForecast={this.updateForecast}
          updateCurrent={this.updateCurrent}
          currentForm={this.state.currentForm}
        />
        <div>
          {currentWeather}
          <NextHoursWeather nextHours={this.state.forecast.list} />
        </div>
        <div>
          <FiveDayForecast
            showFiveDay={this.state.showFiveDay}
            forecast={this.state.forecast.list}
            funcShowFiveDay={this.showFiveDay}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
