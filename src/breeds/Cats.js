import React, { Component, Fragment } from "react";
import { Card, Image, Button, Input, Segment } from "semantic-ui-react";
import "./Cats.css";
import {Link } from "react-router-dom";
import {StyledHeader} from '../sharedcomponents/StyledHeader'
import StyledContent from "../sharedcomponents/StyledContent";

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

  addLike = (breed) => {
    fetch(`https://jfdz10nan-app.firebaseio.com/breeds/${breed.id}.json`, {
      method: 'PATCH',
      body: JSON.stringify({
        likeCount: breed.likeCount + 1
      })
    })
  }

  render() {
    return (
      <Fragment>
        <StyledContent>
          <StyledHeader>
            <h1 style={{paddingTop: '16px'}}>Rasy kotów</h1>
            <Input
              className="cat_input"
              action="Szukaj"
              placeholder="Szukaj..."
            />
          </StyledHeader>
          <Segment >
            <Card.Group className="cat_card_group" itemsPerRow={2}>
              {this.state.breeds.map(el => {
                return (
                  <Card centered className="cat_card" key={el.id}>
                    <Link to={`cats/${el.id}`}>
                      <Image src={el.image} className="cat_img" alt="kot"/>
                    </Link> 
                    <Card.Content className="cat_content">        
                      <Link className="cat_name" to={`cats/${el.id}`}>{el.name}</Link>
                    </Card.Content>
                    <Button
                      className="cat_button"
                      color="brown"
                      content="Like"
                      icon="heart"
                      label={{
                        basic: true,
                        color: "brown",
                        pointing: "left",
                        content: el.likeCount ? el.likeCount : 0
                      }}
                      onClick={() => this.addLike(el)}
                    />
                  </Card>
                );
              })}
            </Card.Group>
          </Segment>
        </StyledContent>
      </Fragment>
    );
  }
}

export default Cats;
