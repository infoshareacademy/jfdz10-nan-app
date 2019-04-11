import React, { Component } from "react";
import { Card, Segment, Input, Button } from "semantic-ui-react";
import {StyledHeader} from '../sharedcomponents/StyledHeader'
import StyledCardImage from '../sharedcomponents/StyledCardImage'
import StyledContent from "../sharedcomponents/StyledContent";
import {Link } from "react-router-dom";

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
                  <Link to={`breeders/${el.id}`}>
                      <StyledCardImage src={el.img} />
                  </Link>
                  <Card.Content>
                    <Card.Header>
                      <Link style={{color: 'black'}} to={`breeders/${el.id}`}>
                      {el.name}
                      </Link>
                    </Card.Header>
                    <Card.Description>
                      {el.description}
                      <Link style={{fontWeight: 'bold'}}to={`breeders/${el.id}`}>
                        Więcej...
                      </Link>
                    </Card.Description>
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
