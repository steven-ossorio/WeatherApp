import React, { Component } from 'react'

class CityWeather extends Component {
  render() {
    return (
      <div>
        {this.props.weather}
      </div>
    )
  }
}

export default CityWeather;