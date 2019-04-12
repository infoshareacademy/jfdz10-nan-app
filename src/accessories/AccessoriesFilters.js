import React, { Component, Fragment } from "react";
import { Dropdown, Button } from "semantic-ui-react";

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

  createOnSortClick = (dir) => {
        this.props.onSortDirection({
            dir: dir === 'ASC' ? 'DESC' : 'ASC'
        })

};

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
        <span className='sort__trigger'>
        <Button onClick={this.createOnSortClick} basic content='Sortuj...' icon='down arrow' labelPosition='right' />
        </span>
      </Fragment>
    );
  }
}

export default AccessoriesFilters;
