import React, { Fragment, Component } from "react";
import {
  Input,
  Segment,
  Divider,
  Table,
  Image,
  Header
} from "semantic-ui-react";

import "./Accessories.css";

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
        <div className="accessories__container">
          <div className="accessories__bar">
            <h1>Karmy i akcesoria</h1>
          </div>

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
              </div>
            </div>

            <Divider horizontal>
              <Header as="h2">Opis</Header>
            </Divider>
            <div style={{textAlign: "center"}}>{item.description}</div>
          </Segment>
        </div>
      </Fragment>
    );
  }
}

export default SingleAccessory;
