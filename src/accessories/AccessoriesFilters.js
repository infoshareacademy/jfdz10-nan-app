import React, { Component, Fragment } from "react";

class AccessoriesFilters extends Component {
  state = {
    text: ""
  };

  onInputChange = e => {
    this.setState({ text: e.target.value }, () =>
      this.props.onFilterChange(this.state)
    );
  };

  render() {
    return (
      <Fragment>
        <select>
            <option value=''>wybierz kategorię</option>\
            {this.props.categories.map(category => (
                <option value={category}>{category}</option>
            ))}
        </select>
      </Fragment>
    );
  }
}

export default AccessoriesFilters;
