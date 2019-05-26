import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Progress, Image, Segment, Button, Icon, ButtonOr } from "semantic-ui-react";
import firebase from "firebase";
import { Link } from "react-router-dom";

import StyledContent from "../sharedcomponents/StyledContent";
import { StyledHeader } from "../sharedcomponents/StyledHeader";

class UserCatMatch extends Component {
  state = {
    characteristics: []
  };

  getData = () => {
    const accessoriesRef = firebase.database().ref("breeds");

    accessoriesRef.once("value").then(snapshot => {
      const data = snapshot.val() || [];
      const characteristics = data.map(breed => {
        return { ...breed.characteristics, id: breed.id };
      });
      this.setState({
        breeds: data,
        characteristics: characteristics
      });
    });

    accessoriesRef.on("value", snapshot => {
      const data = snapshot.val() || [];
      const characteristics = data.map(breed => {
        return { ...breed.characteristics, id: breed.id };
      });
      this.setState({
        breeds: data,
        characteristics: characteristics
      });
    });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userRating !== this.state.userRating) {
      const breeds = this.state.breeds;
      const rating = this.state.userRating;
      this.setState({
        breedsWithRating: breeds.map(breed => ({
          ...rating.find(rate => rate.id === breed.id && rate),
          ...breed
        }))
      });
    }

    if (prevState.characteristics !== this.state.characteristics) {
      const products = this.state.characteristics;
      const userPreferences = this.props.userPreferences;
      this.setState({
        userRating: products.map(product => {
          const rating = Object.keys(product).reduce((acc, productKey) => {
            return product[productKey] === userPreferences[productKey]
              ? acc + 1
              : acc;
          }, 0);
          const id = product.id;
          return { id, rating };
        })
      });
    }
  }

  handleAddRating = () => {
    if (this.props.userId) {
    firebase.database().ref("users/"+ this.props.userId).set({userRating: Object.assign({}, this.state.userRating)})
    }
  }

  render() {
    console.log(this.props.userId)
  
    
    return (
      <Fragment>
        <StyledContent>
          <StyledHeader>
            <h1 style={{ paddingTop: "16px" }}>
              Koty najlepiej pasujące do ciebie
            </h1>
          </StyledHeader>
          {this.state.breedsWithRating &&
            this.state.breedsWithRating.map(breed => (
              <Link to={`/logged/cats/${breed.id}`}>
                <Segment style={{ margin: "10px" }}>
                  <Image
                    style={{ margin: "10px" }}
                    src={breed.image}
                    size="small"
                    verticalAlign="middle"
                  />
                  <span style={{ fontSize: "1.5rem" }}>{breed.name}</span>
                  <Progress
                    value={breed.rating}
                    total="9"
                    progress="ratio"
                    color="teal"
                  />
                </Segment>
              </Link>
            ))}
          <Link to={"/logged/profile/cat-preferences"}>
          <Button.Group>
          <Button icon labelPosition="left">
              Wróć do wyboru kryteriów
              <Icon name="left arrow" />
            </Button>
            <Button.Or />
            <Button positive onClick={() => this.handleAddRating()}>
              Zapisz
            </Button>
          </Button.Group>
            
          </Link>
        </StyledContent>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userPreferences: state.userPreferences.userPreferences,
  userId: state.users.currentUser.uid
});

export default connect(mapStateToProps)(UserCatMatch);
