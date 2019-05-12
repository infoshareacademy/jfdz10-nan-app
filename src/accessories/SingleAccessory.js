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

import "./Accessories.css";
import StyledContent from "../sharedcomponents/StyledContent";
import { StyledSingleTitle } from "../sharedcomponents/StyledHeader";

class SingleAccessory extends Component {
  state = {
    item: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`/feed-and-accessories.json`)
      .then(response => response.json())
      .then(accessories => {
        const item = accessories.find(item => item.id === Number(id));

        this.setState({ item });
      });
  }

  render() {
    const { item } = this.state;
    const productImage = {
      maxHeight: "320px"
    };

    return (
      <Fragment>
        <StyledContent>
          <StyledSingleTitle>
            <h1>Karmy i akcesoria</h1>
          </StyledSingleTitle>
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
                <Button positive animated="vertical">
                  <Button.Content hidden>Kup</Button.Content>
                  <Button.Content visible>
                    <Icon name="cart" />
                  </Button.Content>
                </Button>
                <Input defaultValue='1'
                action={<Button.Group>
                  <Button icon='add' />
                  <Button icon='minus' />
                </Button.Group>}/>
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

export default SingleAccessory;
