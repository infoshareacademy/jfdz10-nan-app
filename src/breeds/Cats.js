import React, { Component, Fragment } from "react";
import { Card, Icon, Image, Grid, Button, Input, Item } from "semantic-ui-react";
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
        <Input className="input" action='Search' placeholder='Szukaj...' />
        <h1 className="title">Rasy kotów</h1>
        <Grid columns={3} >
        <Grid.Row className="row">
          {this.state.breeds.map(el => {
            return (
              <Grid.Column key={el.id}>
                <Card className="card">
                  <Image src={el.image} className="img"/>
                  <Card.Content>             
                    <Item>
                      <Item.Content verticalAlign='middle'>
                        <Item.Header className="header">
                          <Icon name='favorite' />
                            
                          <Link to="/dynamic-route/12">
                          {el.breed}
                          </Link>
               
                        </Item.Header>
                      </Item.Content>
                    </Item>
                  </Card.Content>
                  <Button className="button"
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
        <Route path="/dynamic-route/:id" component={SingleCat} />
      </Fragment>
    );
  }
}

export default Cats;
