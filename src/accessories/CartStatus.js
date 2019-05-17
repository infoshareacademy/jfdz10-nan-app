import React, { Component } from "react";
import { connect } from "react-redux";
import { Label, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { fetchCartItems } from "./reducers/cartReducer";

class CartStatus extends Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    return (
      <Link to={"/cart"}>
        <Label>
          <Icon name="cart" />
          <Label.Detail>Twój koszyk:{this.props.products.length}</Label.Detail>
        </Label>
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  products: state.cart.products
});

const mapDispatchToProps = {
  fetchCartItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartStatus);
