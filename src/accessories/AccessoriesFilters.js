import React, { Component, Fragment } from "react";
import { Input, Dropdown, Button } from "semantic-ui-react";

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

  onCategorySelect = (event, { value }) => {
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
    return (
      <Fragment>
        <Dropdown
          onChange={this.onCategorySelect}
          options={this.getCategoryFilter()}
          clearable
          selection
          placeholder="wybierz kategorię..."
        />
        {/* <select onChange={this.onCategorySelect}>
          <option value="">wybierz kategorię</option>git 
          {this.props.categories.map(category => (
            <option value={category}>{category}</option>
          ))}
        </select> */}
        <Button content='Sortuj...' icon='up arrow' labelPosition='right' />
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
