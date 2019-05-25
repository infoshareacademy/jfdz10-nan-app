import React, { Fragment, Component } from "react";
import {
  Segment,
  Divider,
  Table,
  Image,
  Header,
  Button,
  Icon,
  Input
} from "semantic-ui-react";
import { connect } from "react-redux";

import "./Accessories.css";
import StyledContent from "../sharedcomponents/StyledContent";
import { StyledHeader } from "../sharedcomponents/StyledHeader";
import { addToCart } from "../Redux/reducers/cartReducer";
import CartStatus from "./CartStatus";
import firebase from 'firebase'

class SingleAccessory extends Component {
  state = {
    item: {},
    amount: 1
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const accessoriesRef = firebase.database().ref("feed-and-accessories")

<<<<<<< HEAD
    fetch("https://jfdz10nan-app.firebaseio.com/feed-and-accessories.json")
      .then(response => response.json())
      .then(accessories => {
        const item = accessories.find(item => item.id === Number(id));
=======
    accessoriesRef.once("value").then(snapshot => {
      const data = snapshot.val() || [];
      const item = data.find(item => item.id === Number(id));
      this.setState({ item });
    })
>>>>>>> develop

    accessoriesRef.on("value", snapshot => {
      const data = snapshot.val() || [];
      const item = data.find(item => item.id === Number(id));
      this.setState({ item });
    })
  }

  increaseAmount = () => {
    var amount = this.state.amount;
    amount += 1;
    this.setState({ amount });
  };

  decreaseAmount = () => {
    var amount = this.state.amount;
    if (amount > 1) {
      amount -= 1;
    }
    this.setState({ amount });
  };

  render() {
    const { item, amount } = this.state;
    const productImage = {
      maxHeight: "320px"
    };

    return (
      <Fragment>
        <StyledContent>
          <StyledHeader>
            <h1>Karmy i akcesoria</h1>
            <CartStatus />
          </StyledHeader>
          <Segment>
            <div className="product__characteristic">
              <Image
                style={productImage}
                className="product__image"
                src={item.img}
              />
              <div>
                <h1> {item.name} </h1>

                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={2}>Producent</Table.Cell>
                      <Table.Cell>{item.producer}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Cena</Table.Cell>
                      <Table.Cell>{item.price} zł</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                <Button
                  positive
                  animated="vertical"
                  onClick={() => this.props.addToCart({ ...item, amount })}
                >
                  <Button.Content hidden>Kup</Button.Content>
                  <Button.Content visible>
                    <Icon name="cart" />
                  </Button.Content>
                </Button>
                <Input
                  value={this.state.amount}
                  action={
                    <Button.Group>
                      <Button
                        onClick={() => this.increaseAmount()}
                        icon="add"
                      />
                      <Button
                        onClick={() => this.decreaseAmount()}
                        icon="minus"
                      />
                    </Button.Group>
                  }
                />
              </div>
            </div>

            <Divider horizontal>
              <Header as="h2">Opis</Header>
            </Divider>
            <div style={{ textAlign: "center" }}>{item.description}</div>
          </Segment>
        </StyledContent>
      </Fragment>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  addToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleAccessory);
