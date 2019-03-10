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
        <h1 style={{textAlign: "center"}}>Lista Hodowców</h1>
        <Segment>
        <Card.Group itemsPerRow={3}>
          {this.state.breeders.map(el => {
            return (
              <Card centered>
                <Image src={el.img}/>
                <Card.Content>
                  <Card.Header>{el.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>{el.description}</Card.Description>
                </Card.Content>
                <Card.Content extra >
                  <a>
                    <Icon name='heart' />
                    Dodaj do ulubionych
                  </a>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
        </Segment>
      </>
    );
  }
}

export default Breeders;
