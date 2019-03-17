import React, { Component } from "react";
import {
  Card,
  Icon,
  Image,
  Segment,
  Grid,
  Search,
  Divider,
  Header,
  Button
} from "semantic-ui-react";

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
        <div>
        <Icon size="large" name="bars"></Icon>
        <h1 style={{ textAlign: "center" }}>Lista Hodowców
        </h1>
        </div>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Lub</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Znajdz hodowcę
                </Header>

                <Search placeholder="Szukaj..." />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="paw" />
                  Dodaj nowego hodowcę
                </Header>
                <Button primary >Dodaj</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Card.Group itemsPerRow={3}>
            {this.state.breeders.map(el => {
              return (
                <Card centered>
                  <Image src={el.img} />
                  <Card.Content>
                    <Card.Header>{el.name}</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>{el.description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <p>
                      <Icon name="heart" />
                      Dodaj do ulubionych
                    </p>
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

//TODO przesunac hamburger menu na prawo
//TODO wyrownac zawartosc w kartach
//TODO zmmniejszyc wysokosc segmentu z search/add 

export default Breeders;
