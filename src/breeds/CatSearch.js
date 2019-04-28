import React, { Fragment } from "react";
import { Input } from "semantic-ui-react";

class CatSearch extends React.Component {
  onInputChange = e => {
    this.props.onInputChange(e.target.value)
  };

    render() {
        return (
            <Fragment>
                <Input
                    icon="search"
                    className="cat_input"
                    placeholder="wpisz czego szukasz..."
                    type="text"
                    value={this.props.value}
                    onChange={this.onInputChange} />
            </Fragment>
        )
    }
}

export default CatSearch;