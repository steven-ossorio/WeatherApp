import React, { Component } from "react";
import SearchCity from "./SearchCity";
import SearchZip from "./SearchZipcode";
import SearchLatNLong from "./SearchLat&Long";

class SearchForms extends Component {
  state = {
    currentForm: "city"
  };

  render() {
    if (this.props.currentForm === "city") {
      return <SearchCity />;
    }

    if (this.props.currentForm === "zip code") {
      return <SearchZip />;
    }

    if (this.props.currentForm === "lat & long") {
      return <SearchLatNLong />;
    }
  }
}

export default SearchForms;
