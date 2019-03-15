import React, { Component } from "react";
import { Button, Image, Card } from "semantic-ui-react";


class Accessories extends Component {
  state = {
    accessories: []
  };

  componentDidMount() {
    fetch("/feed-and-accessories.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          accessories: data
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Accessories</h1>
        <div>
          <Card.Group itemsPerRow={6} stackable>
            {this.state.accessories.map(el => (
              <Card key={el.name}>
                <Image src={el.img} />

                <Card.Content>
                  <Card.Header>{el.name}</Card.Header>
                  <Card.Meta>{el.producer}</Card.Meta>
                  <Card.Description>{el.description}</Card.Description>
                </Card.Content>

                <Card.Content extra>
                  <Button size="small" content="Zobacz" />
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </div>
      </React.Fragment>
    );
  }
}

export default Accessories;
