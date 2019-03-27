import React, { Fragment, Component } from "react";
import {
  Input,
  Segment,
  Divider,
  Table,
  Image,
  Header
} from "semantic-ui-react";

import "./Profile.css";

class Profile extends Component {
  state = {
    user: {
      id: 1,
      username: "johndoe",
      password: "IloveCats",
      eMail: "johndoe@hotmail.com",
      name: "John",
      lastName: "Doe",
      image: "http://www.nan.jfdz10.is-academy.pl/icons/volunteer.svg",
      favoriteCats: [2, 5, 6],
      favoriteBreeders: [1, 3],
      favoriteAccessories: [1, 2]
    }
  };

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
            <Input action="Szukaj" className="cat_input" placeholder="wpisz czego szukasz..." />
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

export default Profile;
