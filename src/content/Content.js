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

class Content extends Component {
  render() {
    return (

        <div style={{height: "100vh", width: "82.25vw", position: "relative", left: "18.75vw", padding: "0 2rem" }}>
        <Route exact path="/cats" component={Cats} />
        <Route exact path="/food-and-accessories" component={Accessories} />
        <Route exact path="/breeders" component={Breeders} />
        <Route exact path={"/"} component={Dashboard} />
        <Route exact path={"/profile"} component={Profile} />
        <Route path={"/cats/:id"} component={SingleCat} />
        <Route path={"/dashboard"} component={Dashboard} />
        <Route path={"/cart"} component={AccessoriesCart} />
        <Route path={"/breeders/:id"} component={SingleBreeder} />
        <Route path={"/food-and-accessories/:id"} component={SingleAccessory} />
        </div>
    );
  }
}
export default Content;