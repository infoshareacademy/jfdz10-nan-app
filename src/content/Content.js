import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Route } from "react-router-dom";
import Cats from '../breeds/Cats'
import Accessories from '../accessories/Accessories'
import SingleAccessory from '../accessories/SingleAccessory'
import Breeders from '../breeders/Breeders'
import Dashboard from '../dashboard/Dashboard'
import Profile from '../user/Profile'
import SingleCat from '../breeds/SingleCat'
import AccessoriesCart from '../accessories/AccessoriesCart'
import SingleBreeder from '../breeders/SingleBreeder'
import UserCatPreferences from '../user/UserCatPreferences'
import UserCatMatch from '../user/UserCatMatch'

import userActions from "../Redux/actions/userActions";
import { connect } from "react-redux";

class Content extends Component {

  componentDidMount() {
    this.props.fetchData("users", `users/${this.props.currentUser.uid}`)
    this.props.fetchData("routes", "routes")
    this.props.fetchData("breeds", "breeds")
    this.props.fetchData("breeders", "breeders")
    this.props.fetchData("accessories", "feed-and-accessories")
  }
  render() {
    return (

        <div style={{height: "100vh", width: "82.25vw", position: "relative", left: "18.75vw", padding: "0 2rem" , backgroundColor: "#fff"}}>
        <Route exact path="/logged/cats" component={Cats} />
        <Route exact path="/logged/food-and-accessories" component={Accessories} />
        <Route exact path="/logged/breeders" component={Breeders} />
        <Route exact path={"/logged"} component={Dashboard} />
        <Route exact path={"/logged/profile"} component={Profile} />
        <Route path={"/logged/cats/:id"} component={SingleCat} />
        <Route path={"/logged/breeders/:id"} component={SingleBreeder} />
        <Route path={"/logged/food-and-accessories/:id"} component={SingleAccessory} />
        <Route path={"/logged/cart"} component={AccessoriesCart} />
        <Route path={"/logged/profile/cat-preferences"} component={UserCatPreferences} />
        <Route path={"/logged/profile/cat-match"} component={UserCatMatch} />

        </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);