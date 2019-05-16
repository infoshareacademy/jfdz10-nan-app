import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import StyledContent from "../sharedcomponents/StyledContent";
import { StyledHeader } from "../sharedcomponents/StyledHeader";

import { fetchCartItems, deleteFromCart } from "./reducers/cartReducer";

class AccessoriesCart extends Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    return (
      <Fragment>
        <StyledContent>
          <StyledHeader>
            <h1 style={{ paddingTop: "16px" }}>Sklep jaki jest każdy widzi</h1>
          </StyledHeader>
          <Segment>
            <ul>
              {this.props.products.map(item => (
            <li>{item.name} 
            <button onClick={() => this.props.deleteFromCart(item.url)}>delete</button></li>
          ))}
            </ul>
          </Segment>
        </StyledContent>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
    products: state.cart.products
});

const mapDispatchToProps = {
  fetchCartItems,
  deleteFromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccessoriesCart);
