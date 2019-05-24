import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Progress } from "semantic-ui-react";
import firebase from "firebase";

import StyledContent from "../sharedcomponents/StyledContent";

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

  // getItemsByUserPreferences = (products, userPreferences) => {
  //   this.setState({
  //     userRating: products.map(product => {
  //       const rating = Object.keys(product).reduce((acc, productKey) => {
  //         return product[productKey] === userPreferences[productKey]
  //           ? acc + 1
  //           : acc;
  //       }, 0);
  //       const id = product.id;
  //       return { id, rating };
  //     })
  //   });
  //   console.log(this.state.userRating);
  // };

  componentDidMount() {
    this.getData();
    // this.getItemsByUserPreferences(
    //   this.state.characteristics,
    //   this.props.userPreferences
    // );
    // console.log(
    //   this.state,
    //   this.state.userRating,
    //   this.state.characteristics,
    //   this.props.userPreferences
    // );
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.characteristics !== this.state.characteristics) {
      const products = this.state.characteristics;
      const userPreferences = this.props.userPreferences
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
      console.log(this.state.userRating);
    };
    }
  

  compareNumbers = (a, b) => {
    const ratingA = a.rating;
    const ratingB = b.rating;
    return ratingA - ratingB;
  };

  render() {
    console.log(this.state);
    // const sortedUserRating = this.state.userRating.sort(() => this.compareNumbers())
    return (
      <Fragment>
        <StyledContent>
          <Progress
            value=""
            total="9"
            progress="ratio"
            label="cat name"
            color="teal"
          />
        </StyledContent>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userPreferences: state.userPreferences.userPreferences
});

export default connect(mapStateToProps)(UserCatMatch);
