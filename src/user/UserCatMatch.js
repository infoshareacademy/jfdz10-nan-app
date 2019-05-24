import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Progress } from "semantic-ui-react";
import firebase from "firebase";


import StyledContent from "../sharedcomponents/StyledContent";

class UserCatMatch extends Component {

  state ={
    characteristis: [],
    
  }

  componentDidMount() {
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


  }

  

  getItemsByUserPreferences = (products, userPreferences) => {
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
    console.log(this.state.userRating)

  };

  saveUserPreferences = () => { 
    this.getItemsByUserPreferences(this.state.characteristics, this.state.userPreferences);
    console.log(this.state.userRating)
    // this.state.userRating.map(item => {
    //   firebase.database().ref('users/'+ this.props.uid + '/userRating').set({id: item.id, rating: item.rating})
    // })
    
  }

  render() {
      console.log(this.props.userPreferences)
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

export default UserCatMatch;
