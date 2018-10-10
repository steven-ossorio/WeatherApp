import React, { Component } from "react";
import SearchCity from "./SearchCity";
import SearchZip from "./SearchZipcode";
import PropTypes from "prop-types";

class SearchForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentForm: "city"
    };
  }

  render() {
    if (this.props.currentForm === "city") {
      return (
        <SearchCity
          updateCurrent={this.props.updateCurrent}
          updateForecast={this.props.updateForecast}
        />
      );
    }

    if (this.props.currentForm === "zip code") {
      return (
        <SearchZip
          updateCurrent={this.props.updateCurrent}
          updateForecast={this.props.updateForecast}
        />
      );
    }
  }
}

SearchForms.propTypes = {
  updateCurrent: PropTypes.func.isRequired,
  updateForecast: PropTypes.func.isRequired,
  currentForm: PropTypes.string.isRequired
};

export default SearchForms;
