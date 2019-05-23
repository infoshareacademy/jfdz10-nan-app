import React, { Component, Fragment } from "react";
import { Label, Icon } from "semantic-ui-react";
import firebase from 'firebase'
import FavoritesComponent from "./FavoritesComponent"

import userActions from "../Redux/actions/userActions";
import getNameById from "../Redux/reducers/dataReducer";
import { connect } from "react-redux";

class Favorites extends Component {

  handleDelete = (userFavIdKey, userFavArray) => {
    console.log(userFavIdKey)
 }

  render() {
    const { breeds, breeders, accessories, users } = this.props;
    return (
      <Fragment>
        
      <h3 style={{ marginTop: "20px" }}>Koty</h3>
        <FavoritesComponent favId="users.favCatsId" userFavIds={users.favCatsId} elementsArray={breeds} onDelete={this.handleDelete}/>
        
      <h3 style={{ marginTop: "20px" }}>Hodowle</h3>
            <FavoritesComponent favId="users.favBreedersId" userFavIds={users.favBreedersId} elementsArray={breeders} onDelete={this.handleDelete}/>
            
      <h3 style={{ marginTop: "20px" }}>Akcesoria</h3>
            <FavoritesComponent favId="users.favAccessoriesId" userFavIds={users.favAccessoriesId} elementsArray={accessories} onDelete={this.handleDelete}/>
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
