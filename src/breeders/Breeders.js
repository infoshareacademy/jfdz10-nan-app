import React, { Component } from "react";
import {
  Card,
  Segment,
  Input,
  Button
} from "semantic-ui-react";

import styled from 'styled-components'

import './Breeders.css'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCardImage = styled.img`
  height: 200px !important;
  max-height: 100%;  
  max-width: 100%; 
  width: auto;   
  top: 0;
  bottom: 0;
  left: 0; 
  right: 0; 
  margin: auto;
`;

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
        <StyledHeader>
        <h1>Lista Hodowców</h1>
        <Input className="input" action='Search' placeholder='Szukaj...'/>
        </StyledHeader>
        <Segment style={{margin: "0 2rem"}}>
          <Card.Group itemsPerRow={4}>
            {this.state.breeders.map(el => {
              return (
                <Card centered >
                  <StyledCardImage src={el.img} />
                  <Card.Content>
                    <Card.Header>{el.name}</Card.Header>
                    <Card.Description>{el.description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                  <Button className="button"
                    color='brown'
                    content='Like'
                    icon='heart'
                    label={{ basic: true, color: 'brown', pointing: 'left', content: '2,048' }}
                  />
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

//TODO wyrownac zawartosc w kartach
//TODO zmmniejszyc wysokosc segmentu z search/add 

export default Breeders;
