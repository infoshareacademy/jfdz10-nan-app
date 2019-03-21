import React, { Fragment } from "react";
import {
  Input,
  Segment,
  Divider,
  Table,
  Image,
  Header
} from "semantic-ui-react";

import "./Accessories.css";

const SingleAccessory = props => {
  const { accessory } = props;

  const productImage = {
    maxHeight: "320px"
  };

  return (
    <Fragment>
      <div className="accessories__container">
        <div className="accessories__bar">
          <h1>Karmy i akcesoria</h1>
          <Input action="Szukaj" placeholder="wpisz czego szukasz..." />
        </div>

        <Segment>
          <div className="product__characteristic">
            <Image
              style={productImage}
              className="product__image"
              src={accessory.img}
            />
            <div>
              <h1> {accessory.name} </h1>

              <Table definition>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell width={2}>Producent</Table.Cell>
                    <Table.Cell>{accessory.producer}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Cena</Table.Cell>
                    <Table.Cell>{accessory.price} zł</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>

          <Divider horizontal>
            <Header as="h2">Opis</Header>
          </Divider>
          <div>{accessory.description}</div>
        </Segment>
      </div>
    </Fragment>
  );
};

export default SingleAccessory;
