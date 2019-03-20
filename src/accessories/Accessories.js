import React, { Component, Fragment } from "react";
import { Button, Image, Card, Segment, Input } from "semantic-ui-react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import FilteringCategories from "./FilteringCategories";
import SingleAccessory from "./SingleAccessory.js";

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

  getAccessory = (id) => {
    return this.state.accessories.find(accessory => {
        return accessory.id === Number(id);
    });
};

renderAccessory = (reactRouterProps) => {
    const id = reactRouterProps.match.params.id;

    return <SingleAccessory accessory={this.getAccessory(id)}/>;
};

  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/food-and-accessories"
          render={() => (
            <Fragment>
              <div className="accessories__container">
                <Input
                  className="input"
                  action="Search"
                  placeholder="Szukaj..."
                />
                <h1>Food and accessories</h1>
                <Segment>
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
          )}
        />

        <Route path="/food-and-accessories/:id" render={this.renderAccessory} />
      </BrowserRouter>
    );
  }
}

export default Accessories;
