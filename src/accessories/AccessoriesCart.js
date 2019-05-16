import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Segment, Button, List } from "semantic-ui-react";
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
            <h1 style={{ paddingTop: "16px" }}>Koszyk</h1>
          </StyledHeader>
          <Segment>
              <List divided verticalAlign='middle'>
              {this.props.products.map(item => (
                  <List.Item>
                      <List.Content floated='left'>{this.props.products.indexOf(item) + 1}.</List.Content>
                    <List.Content floated='right'>
                    <Button onClick={() => this.props.deleteFromCart()}>USUŃ</Button>
                    </List.Content>
                    <List.Content>{item.name}</List.Content>
                    <List.Content floated='right'>{item.price} zł</List.Content>
                  </List.Item>
                   ))}
              </List>
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
