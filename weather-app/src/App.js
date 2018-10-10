import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import SearchForms from "./SearchForms";
import CurrentWeather from "./CurrentWeather";
import NextHoursWeather from "./NextHoursWeather";
import FiveDayForecast from "./FiveDayForecast";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: [],
      current: {},
      currentForm: "city",
      showFiveDay: false,
      nextHours: []
    };

    this.updateForecast = this.updateForecast.bind(this);
    this.updateCurrent = this.updateCurrent.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.showFiveDay = this.showFiveDay.bind(this);
    this.updateDayForecast = this.updateDayForecast.bind(this);
  }

  updateForecast(forecast) {
    this.setState({ forecast, showFiveDay: false, nextHours: forecast });
  }

  updateCurrent(current) {
    this.setState({ current, showFiveDay: false });
  }

  updateForm(e) {
    let currentForm = e.target.value.toLowerCase();
    this.setState({ currentForm });
  }

  showFiveDay() {
    this.setState({ showFiveDay: true });
  }

  updateDayForecast(nextHours) {
    this.setState({ nextHours });
  }

  render() {
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
          <NextHoursWeather nextHours={this.state.nextHours} />
        </div>
        <div>
          <FiveDayForecast
            showFiveDay={this.state.showFiveDay}
            forecast={this.state.forecast}
            funcShowFiveDay={this.showFiveDay}
            updateDayForecast={this.updateDayForecast}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
