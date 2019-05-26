import React, { Component, Fragment } from "react";
import firebase from "firebase";
import FavoritesComponent from "./FavoritesComponent";

import userActions from "../Redux/actions/userActions";
import { connect } from "react-redux";

class Favorites extends Component {
  handleDelete = (userFavId, userFavArrayName) => {
    const newFavArray = this.props.users[userFavArrayName].filter(
      favId => favId !== userFavId
    );
    firebase
      .database()
      .ref(`users/${this.props.userId}/${userFavArrayName}`)
      .set(newFavArray);
    this.props.fetchData("users", `users/${this.props.userId}`);
  };

  render() {
    const { breeds, breeders, accessories, users } = this.props;
    return (
      <Fragment>
        <h3 style={{ marginTop: "20px" }}>Koty</h3>
        <FavoritesComponent
          userFavArrayName="favCats"
          userFavArray={users.favCats}
          dataArray={breeds}
          onDelete={this.handleDelete}
        />

        <h3 style={{ marginTop: "20px" }}>Hodowle</h3>
        <FavoritesComponent
          userFavArrayName="favBreeders"
          userFavArray={users.favBreeders}
          dataArray={breeders}
          onDelete={this.handleDelete}
        />

        <h3 style={{ marginTop: "20px" }}>Akcesoria</h3>
        <FavoritesComponent
          userFavArrayName="favAccessories"
          userFavArray={users.favAccessories}
          dataArray={accessories}
          onDelete={this.handleDelete}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  breeds: state.data.breeds,
  breeders: state.data.breeders,
  accessories: state.data.accessories,
  users: state.data.users,
  userId: state.users.currentUser.uid
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
