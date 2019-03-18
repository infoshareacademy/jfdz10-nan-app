import React, { Component } from "react";
import { Button, Image, Card, Segment, Input } from "semantic-ui-react";
import FilteringCategories from "./FilteringCategories"
import "./Accessories.css"


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
        <div className="accessories__container">
        <Input className="input" action='Search' placeholder='Szukaj...' />
        <h1>Food and accessories</h1>
        <Segment >
        <FilteringCategories />
        <Card.Group itemsPerRow={5} stackable>
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
        </Segment>
        </div>
          
      </React.Fragment>
    );
  }
}

export default Accessories;
