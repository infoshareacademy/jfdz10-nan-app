import React, { Fragment, Component } from 'react'
import {
  Segment,
  Divider,
  Table,
  Image,
  Header
} from "semantic-ui-react";

import "../breeders/Breeders.css";
import StyledContent from "../sharedcomponents/StyledContent";
import {StyledSingleTitle} from "../sharedcomponents/StyledHeader"

class SingleBreeder extends Component {
  state = {
    breeder: {
      contactInfo: {}
    },
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`/breeders.json`)
    .then(response => response.json())
    .then(breeders => {
      const breeder = Object.values(breeders || {}).find(breeder => breeder.id === Number(id));

      this.setState({ breeder });
      
  });
}

render() {
  const { breeder } = this.state;
  
  const productImage = {
    maxHeight: "320px",
    marginRight: "50px"
  };

  return (
    <Fragment>
      <StyledContent>
        <StyledSingleTitle>
          <h1>Hodowcy</h1>
        </StyledSingleTitle>

        <Segment >
          <div className="breeder__characteristic">
            <Image
              style={productImage}
              src={breeder.img}
            />
            <div>
              <h1> {breeder.name} </h1>
              <Table definition>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell width={5}>Adres</Table.Cell>
                    <Table.Cell>{`ul.${breeder.contactInfo.street}, ${breeder.contactInfo.postalCode} ${breeder.contactInfo.city}`}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Email</Table.Cell>
                    <Table.Cell>{breeder.contactInfo.email}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Nr telefonu</Table.Cell>
                    <Table.Cell>{breeder.contactInfo.phoneNo}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Strona www</Table.Cell>
                    <Table.Cell>{breeder.contactInfo.website}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>

          <Divider horizontal>
            <Header as="h2">Opis</Header>
          </Divider>
          <div className="breeder__description">{breeder.description}</div>
        </Segment>
      </StyledContent>
    </Fragment>
  );
}
}

export default SingleBreeder
