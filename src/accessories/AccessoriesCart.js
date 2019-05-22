import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Segment, Button, Table } from "semantic-ui-react";
import StyledContent from "../sharedcomponents/StyledContent";
import { StyledHeader } from "../sharedcomponents/StyledHeader";

import { fetchCartItems, deleteFromCart } from "../Redux/reducers/cartReducer";

class AccessoriesCart extends Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  totalCost() {
    var products = this.props.products;
    return products
      .map(product => product.price * product.amount)
      .reduce((acc, product) => acc + product, 0);
  }

  render() {
    return (
      <Fragment>
        <StyledContent>
          <StyledHeader>
            <h1 style={{ paddingTop: "16px" }}>Koszyk</h1>
          </StyledHeader>
          <Segment>
            <Table>
              <Table.Header>
                <Table.Row key={Date.now()}>
                  <Table.HeaderCell>Lp.</Table.HeaderCell>
                  <Table.HeaderCell>Nazwa</Table.HeaderCell>
                  <Table.HeaderCell>Ilość</Table.HeaderCell>
                  <Table.HeaderCell>Cena</Table.HeaderCell>
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.props.products.map(item => (
                  <Table.Row key={item.id}>
                    <Table.Cell>
                      {this.props.products.indexOf(item) + 1}.
                    </Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.amount} szt.</Table.Cell>
                    <Table.Cell>{item.price * item.amount} zł</Table.Cell>
                    <Table.Cell>
                      <Button onClick={() => this.props.deleteFromCart(item)}>
                        USUŃ
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell>
                    Łącznie: {this.totalCost()} zł
                  </Table.Cell>
                  <Table.Cell />
                </Table.Row>
              </Table.Body>
            </Table>
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
