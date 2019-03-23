import React, { Component, Fragment } from "react";
import { Card, Image, Button, Input, Segment } from "semantic-ui-react";
import styled from "styled-components";
import "./Cats.css";
import {Route, Link} from 'react-router-dom';
import SingleCat from './SingleCat';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem 2rem 0;
`;

class Cats extends Component {
  state = {
    breeds: []
  };

  componentDidMount() {
    fetch("/breeds.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          breeds: data
        });
      });
  }

  render() {
    return (
      <Fragment>
        <StyledHeader>
          <h1 className="cat_title">Rasy kotów</h1>
          <Input className="cat_input" action='Szukaj' placeholder='Szukaj...' />
        </StyledHeader>
        <Segment className="cat_segment">
          <Card.Group className="cat_card_group" itemsPerRow={2}>
          {this.state.breeds.map(el => {
            return (
                <Card centered className="cat_card" key={el.id}>
                  <Image src={el.image} className="cat_img" alt="kot"/>
                  <Card.Content>             
                    <Link className="cat_name" to={`̣cats/${el.breed}`} key={el.breed}>{el.breed}</Link>
                  </Card.Content>
                  <Button className="cat_button"
                    color='brown'
                    content='Like'
                    icon='heart'
                    label={{ basic: true, color: 'brown', pointing: 'left', content: '2,048' }}
                  />
                </Card>
            );
          })}
           </Card.Group>
        </Segment>
        <Route path="cats/:name" breeds={this.state.breeds} component={SingleCat} />
      </Fragment>
    );
  }
}

export default Cats;
