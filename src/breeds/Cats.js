import React, { Component, Fragment } from "react";
import { Card, Image, Grid, Button, Input } from "semantic-ui-react";
import "./Cats.css";
import {Route, Link} from 'react-router-dom';
import SingleCat from './SingleCat';

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
        <Input className="cat_input" action='Szukaj' placeholder='Szukaj...' />
        <h1 className="cat_title">Rasy kotów</h1>
        <Grid columns={2} >
        <Grid.Row className="cat_row">
          {this.state.breeds.map(el => {
            return (
              <Grid.Column className="cat_column" key={el.id}>
                <Card className="cat_card">
                  <Image src={el.image} className="cat_img" alt="kot"/>
                  <Card.Content>             
                    <Link className="cat_name" to={`̣/cats/${el.breed}`}>{el.breed}</Link>
                  </Card.Content>
                  <Button className="cat_button"
                    color='brown'
                    content='Like'
                    icon='heart'
                    label={{ basic: true, color: 'brown', pointing: 'left', content: '2,048' }}
                  />
                </Card>
                </Grid.Column>
            );
          })}
        </Grid.Row>
        </Grid>
        <Route path="/cats/:breed" component={SingleCat} />
      </Fragment>
    );
  }
}

export default Cats;
