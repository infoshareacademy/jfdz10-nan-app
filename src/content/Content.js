import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Route } from "react-router-dom";
import Cats from '../breeds/Cats'
import Accessories from '../accessories/Accessories'
import SingleAccessory from '../accessories/SingleAccessory'
import Breeders from '../breeders/Breeders'
import Dashboard from '../dashboard/Dashboard'
import SingleCat from '../breeds/SingleCat'
import SingleBreeder from '../breeders/SingleBreeder'

class Content extends Component {
  render() {
    return (

        <div style={{height: "100vh", width: "82.25vw", overflow: "scroll"}}>
        <Route key="bleh" exact path="/cats" component={Cats} />
        <Route key="bleh2" exact path="/food-and-accessories" component={Accessories} />
        <Route key="bleh3" exact path="/breeders" component={Breeders} />
        <Route path={"/food-and-accessories/:id"} component={SingleAccessory} />
        <Route path={"/cats/:id"} component={SingleCat} />
        <Route path={"/breeders/:id"} component={SingleBreeder} />
        <Route path={"/dashboard"} component={Dashboard} />
        </div>

    );
  }
}
export default Content;