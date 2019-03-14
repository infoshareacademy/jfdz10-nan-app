import React, { Component } from "react";
import { Grid, Button, Image } from "semantic-ui-react";

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
      <React.Fragment>
        <h1>Accessories</h1>
        {this.state.accessories.map(el => {
          return (
            <div>
              <Grid columns="three" divided>
                <Grid.Row>
                  <Grid.Column>
                    {el.name}
                    <Image src={el.img} />
                    <Button size="small" content="Zobacz" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Accessories;
