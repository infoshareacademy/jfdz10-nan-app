import React, { Component, Fragment } from "react";
import { Input, Dropdown } from "semantic-ui-react";

import "./Accessories.css";

class AccessoriesFilters extends Component {
  state = {
    text: "",
    category: ""
  };

  onInputChange = e => {
    this.setState({ text: e.target.value }, () =>
      this.props.onFilterChange(this.state)
    );
  };

  onCategorySelect = (event, {value}) => {
    this.setState({ category: value }, () =>
      this.props.onFilterChange(this.state)
    );
  };

  getCategoryFilter() {
    return this.props.categories.map((category, i) => ({
      key: i,
      text: category,
      value: category
    }));
  }

  

  render() {
    // const { category } = this.state;
    console.log(this.getCategoryFilter());
    return (
      
      <Fragment>
          <Dropdown
            onChange={this.onCategorySelect}
            options={this.getCategoryFilter()}
            selection
            placeholder="wybierz kategorię..."
          />
        {/* <select onChange={this.onCategorySelect}>
          <option value="">wybierz kategorię</option>
          {this.props.categories.map(category => (
            <option value={category}>{category}</option>
          ))}
        </select> */}
        <Input
          icon="search"
          className="cat_input"
          placeholder="wpisz czego szukasz..."
          type="text"
          value={this.state.value}
          onChange={this.onInputChange}
        />
      </Fragment>
    );
  }
}

export default AccessoriesFilters;
