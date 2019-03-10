import React, { Component, Fragment } from "react";
import { Card, Icon, Image, Segment, Grid } from "semantic-ui-react";

class Breeders extends Component {
  state = {
    breeders: []
  };

  componentDidMount() {
    fetch("/breeders.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          breeders: data
        });
      });
  }

  render() {
    return (
      <>
        <h1>Lista Hodowców</h1>
        <Grid.Row >
          {this.state.breeders.map(el => {
            return (
              <Card>
                <Image src={el.img} />
                <Card.Content>
                  <Card.Header>{el.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>{el.description}</Card.Description>
                </Card.Content>
                <Card.Content extra />
              </Card>
            );
          })}
        </Grid.Row>
      </>
    );
  }
}

export default Breeders;
