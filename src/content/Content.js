import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Route } from "react-router-dom";
import Cats from '../breeds/Cats'
import Accessories from '../accessories/Accessories'
import SingleAccessory from '../accessories/SingleAccessory'
import Breeders from '../breeders/Breeders'
import Dashboard from '../dashboard/Dashboard'
<<<<<<< HEAD
import Profile from '../user/Profile'
=======
import SingleCat from '../breeds/SingleCat'
>>>>>>> 18e106db2fc12d7600768ba53f4f6551a6672a48

class Content extends Component {
  render() {
    return (

<<<<<<< HEAD
        <div style={{height: "100vh", width: "82.25vw", position: "relative", left: "18.75vw" }}>
        <Route exact path="/cats" component={Cats} />
        <Route exact path="/food-and-accessories" component={Accessories} />
        <Route exact path="/breeders" component={Breeders} />
        <Route path={"/food-and-accessories/:id"} component={SingleAccessory} />
        <Route exact path={"/"} component={Dashboard} />
        <Route exact path={"/profile"} component={Profile} />
=======
        <div style={{height: "100vh", width: "82.25vw", overflow: "scroll"}}>
        <Route key="bleh" exact path="/cats" component={Cats} />
        <Route key="bleh2" exact path="/food-and-accessories" component={Accessories} />
        <Route key="bleh3" path="/breeders" component={Breeders} />
        <Route path={"/food-and-accessories/:id"} component={SingleAccessory} />
        <Route path={"/cats/:id"} component={SingleCat} />
        <Route path={"/dashboard"} component={Dashboard} />
>>>>>>> 18e106db2fc12d7600768ba53f4f6551a6672a48
        </div>

    );
  }
}
export default Content;