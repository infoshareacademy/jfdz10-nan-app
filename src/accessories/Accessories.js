import React, { Component, Fragment } from "react";
import { Button, Image, Card, Segment, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import StyledHeader from '../sharedcomponents/StyledHeader'

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
        <div style={{ margin: "0 2rem" }}>
          <StyledHeader>
            <h1>Karmy i akcesoria</h1>
            <Input action="Szukaj" className="cat_input" placeholder="wpisz czego szukasz..." />
          </StyledHeader>
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
                      <Button size="small" className="blue-button" content="Zobacz" />
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
