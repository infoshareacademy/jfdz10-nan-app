import React, { Component } from "react";
import { connect } from "react-redux";
import { Label, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { fetchCartItems } from "../Redux/reducers/cartReducer";

class CartStatus extends Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  cartStatusColorHandler() {
    return this.props.products.length > 0 ? "teal" : ""
  }

  render() {
    return (
      <Link to={"/logged/cart"}>
        <Label color={this.cartStatusColorHandler()}  size="large">
          <Icon name="cart" />
          <Label.Detail>Twój koszyk: {this.props.products.length}</Label.Detail>
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
