import React, { Component } from "react";
import { Card, Image, Segment, Input, Button } from "semantic-ui-react";
import {StyledHeader} from '../sharedcomponents/StyledHeader'
import StyledCardImage from '../sharedcomponents/StyledCardImage'
import {Link } from "react-router-dom";
import StyledContent from "../sharedcomponents/StyledContent";

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
      <StyledContent>
        <StyledHeader>
          <h1 style={{paddingTop: '16px'}}>Lista Hodowców</h1>
          <Input action="Szukaj" className="cat_input" placeholder="Szukaj..." />
        </StyledHeader>
        <Segment>
          <Card.Group itemsPerRow={4} >
            {this.state.breeders.map(el => {
              return (
                <Card centered key={el.id}>
                      <StyledCardImage style={{backgroundImage: `url(${el.img})`, height: "20vh"}}/>
                  <Card.Content>
                    <Card.Header>{el.name}</Card.Header>
                    <Card.Description>{el.description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra textAlign="center">
                    <Button
                      className="button"
                      color="brown"
                      content="Like"
                      icon="heart"
                      label={{
                        basic: true,
                        color: "brown",
                        pointing: "left",
                        content: "2,048"
                      }}
                    />
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </Segment>
      </StyledContent>
      </>
    );
  }
}

export default Breeders;
