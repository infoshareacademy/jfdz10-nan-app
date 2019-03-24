import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Route } from "react-router-dom";
import Cats from '../breeds/Cats'
import Accessories from '../accessories/Accessories'
import SingleAccessory from '../accessories/SingleAccessory'
import Breeders from '../breeders/Breeders'
import Dashboard from '../dashboard/Dashboard'

class Content extends Component {
  render() {
    return (

        <div style={{height: "100vh", width: "82.25vw", position: "relative", left: "18.75vw" }}>
        <Route key="bleh" path="/cats" component={Cats} />
        <Route key="bleh2" exact path="/food-and-accessories" component={Accessories} />
        <Route key="bleh3" path="/breeders" component={Breeders} />
        <Route path={"/food-and-accessories/:id"} component={SingleAccessory} />
        <Route path={"/dashboard"} component={Dashboard} />
        </div>

    );
  }
}
export default Content;