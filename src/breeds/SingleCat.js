import React, { Fragment, Component } from 'react'
import {
  Segment,
  Divider,
  Table,
  Image,
  Header
} from "semantic-ui-react";

import "./Cats.css";
import StyledContent from "../sharedcomponents/StyledContent";
import {StyledSingleTitle} from "../sharedcomponents/StyledHeader"

class SingleCat extends Component {
  state = {
    cat: {
      metrics: {}
    },
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`/breeds.json`)
    .then(response => response.json())
    .then(breeds => {
      const cat = breeds.find(cat => cat.id === Number(id));

      this.setState({ cat });
      
  });
}

render() {
  const { cat } = this.state;
  
  const productImage = {
    maxHeight: "320px",
    marginRight: "50px"
  };

  return (
    <Fragment>
      <StyledContent>
        <StyledSingleTitle>
          <h1>Rasy kotów</h1>
        </StyledSingleTitle>

        <Segment >
          <div className="cat__characteristic">
            <Image
              style={productImage}
              className="single_cat_image"
              src={cat.image}
            />
            <div>
              <h1> {cat.name} </h1>
              <Table definition>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell width={2}>Wzrost</Table.Cell>
                    <Table.Cell>{cat.metrics.heigh}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Waga</Table.Cell>
                    <Table.Cell>{cat.metrics.weight}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Kolor</Table.Cell>
                    <Table.Cell>{cat.metrics.color}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Długość życia</Table.Cell>
                    <Table.Cell>{cat.metrics.lifeExpectancy}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>

          <Divider horizontal>
            <Header as="h2">Opis</Header>
          </Divider>
          <div className="cat__description">{cat.description}</div>
        </Segment>
      </StyledContent>
    </Fragment>
  );
}
}


export default SingleCat
