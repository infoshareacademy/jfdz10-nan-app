import React, { Component, Fragment } from "react";
import { Dropdown, Button } from "semantic-ui-react";

import "./Accessories.css";

class AccessoriesFilters extends Component {
  onCategorySelect = (event, { value }) => {
    this.props.onCategoryChange({ category: value });
  };

  getCategoryFilter() {
    return this.props.categories.map((category, i) => ({
      key: i,
      text: category,
      value: category
    }));
  }

  createOnSortClick = dir => {
    dir = this.props.dir === "ASC" ? "DESC" : "ASC";
    this.props.onSortDirection(dir);
  };

  resetClick = () => {
    this.props.onSortDirection(null);
  };

  render() {
    const arrow = this.props.dir === "ASC" ? "down arrow" : "up arrow";

    return (
      <Fragment>
        <Dropdown
          onChange={this.onCategorySelect}
          options={this.getCategoryFilter()}
          clearable
          selection
          placeholder="wybierz kategorię..."
        />
        <span className="sort__trigger">
          <Button
            onClick={this.createOnSortClick}
            basic
            content="Sortuj po nazwie"
            icon={arrow}
            labelPosition="right"
          />
          <Button
            onClick={this.resetClick}
            basic
            icon="ban"
          />
        </span>
      </Fragment>
    );
  }
}

export default AccessoriesFilters;
