import React, { Component, Fragment } from "react";
import { Button, Image, Card, Segment, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

import FilteringCategories from "./FilteringCategories";

import "./Accessories.css";

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
      <Fragment>
        <div className="accessories__container">
          <div className="accessories__bar">
            <h1>Karmy i akcesoria</h1>
            <Input action="Szukaj" placeholder="wpisz czego szukasz..." />
          </div>
          <Segment>
            <FilteringCategories />
            <Card.Group itemsPerRow={5} stackable>
              {this.state.accessories.map(el => (
                <Card key={el.id}>
                  <Image src={el.img} />

                  <Card.Content>
                    <Card.Header>{el.name}</Card.Header>
                    <Card.Meta>{el.producer}</Card.Meta>
                    <Card.Description>{el.description}</Card.Description>
                  </Card.Content>

                  <Card.Content extra>
                    <Link to={`/food-and-accessories/${el.id}`}>
                      <Button size="small" content="Zobacz" />
                    </Link>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Segment>
        </div>
      </Fragment>
    );
  }
}

export default Accessories;
