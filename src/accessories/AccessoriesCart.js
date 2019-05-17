import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Segment, Button, Table } from "semantic-ui-react";
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
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Lp.</Table.HeaderCell>
                  <Table.HeaderCell>Nazwa</Table.HeaderCell>
                  <Table.HeaderCell>Ilość</Table.HeaderCell>
                  <Table.HeaderCell>Cena</Table.HeaderCell>
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.props.products.map(item => (
                  <Table.Row>
                    <Table.Cell>
                      {this.props.products.indexOf(item) + 1}.
                    </Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.amount} szt.</Table.Cell>
                    <Table.Cell>{item.price} zł</Table.Cell>
                    <Table.Cell>
                      <Button onClick={() => this.props.deleteFromCart()}>
                        USUŃ
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
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
