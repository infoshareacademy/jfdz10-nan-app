import React, { Component, Fragment } from "react";
import { Button } from "semantic-ui-react";

import "./Cats";

class CatSorter extends Component {

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

export default CatSorter;