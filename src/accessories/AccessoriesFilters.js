import React, { Component, Fragment } from "react";

class AccessoriesFilters extends Component {
  state = {
    text: '',
    category: ''
  };

  onInputChange = e => {
    this.setState({ text: e.target.value }, () =>
      this.props.onFilterChange(this.state)
    );
  };

  onCategorySelect = e => {
    this.setState(
      {category: e.target.value},
      () => this.props.onFilterChange(this.state)
    )
  }

  render() {
    return (
      <Fragment>
        <select onChange={this.onCategorySelect}>
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
