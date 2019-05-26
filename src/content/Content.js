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
import BreederAdd from '../breeders/BreederAdd'
import AccessoriesCart from '../accessories/AccessoriesCart'
import SingleBreeder from '../breeders/SingleBreeder'
import CatAdd from '../breeds/CatAdd'

class Content extends Component {
  render() {
    return (
        <div style={{height: "100vh", width: "82.25vw", position: "relative", left: "18.75vw", padding: "0 2rem" }}>
        <Route exact path="/logged/cats" component={Cats} />
        <Route exact path="/logged/food-and-accessories" component={Accessories} />
        <Route exact path="/logged/breeders" component={Breeders} />
        <Route exact path={"/logged"} component={Dashboard} />
        <Route exact path={"/logged/profile"} component={Profile} />
        <Route exact path={"/logged/cat-add"} component={CatAdd} />
        <Route exact path={"/logged/breeder-add"} component={BreederAdd} />
        <Route path={"/logged/cats/:id"} component={SingleCat} />
        <Route path={"/logged/breeders/:id"} component={SingleBreeder} />
        <Route path={"/logged/food-and-accessories/:id"} component={SingleAccessory} />
        <Route path={"/logged/cart"} component={AccessoriesCart} />
        </div>
    );
  }
}
export default Content;