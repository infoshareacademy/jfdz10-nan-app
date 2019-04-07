import React, { Component, Fragment } from "react";
import { Input, Dropdown, Button } from "semantic-ui-react";

import "./Accessories.css";

class AccessoriesFilters extends Component {
  

  onCategorySelect = (event, { value }) => {
    this.props.onCategoryChange({ category: value })
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
          <option value="">wybierz kategorię</option>
          {this.props.categories.map(category => (
            <option value={category}>{category}</option>
          ))}
        </select> */}
        <Button content='Sortuj...' icon='up arrow' labelPosition='right' />
       
      </Fragment>
    );
  }
}

export default AccessoriesFilters;
