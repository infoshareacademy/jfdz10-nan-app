import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Route } from "react-router-dom";
import Cats from '../breeds/Cats'
import Accessories from '../accessories/Accessories'
import SingleAccessory from '../accessories/SingleAccessory'
import Breeders from '../breeders/Breeders'
import Dashboard from '../dashboard/Dashboard'
import SingleCat from '../breeds/SingleCat'
import AccessoriesCart from '../accessories/AccessoriesCart'

class Content extends Component {
  render() {
    return (

        <div style={{height: "100vh", width: "82.25vw", overflow: "scroll"}}>
        <Route key="bleh" exact path="/cats" component={Cats} />
        <Route key="bleh2" exact path="/food-and-accessories" component={Accessories} />
        <Route key="bleh3" path="/breeders" component={Breeders} />
        <Route path={"/food-and-accessories/:id"} component={SingleAccessory} />
        <Route path={"/cats/:id"} component={SingleCat} />
        <Route path={"/dashboard"} component={Dashboard} />
        <Route path={"/cart"} component={AccessoriesCart} />
        </div>
    );
  }
}
export default Content;