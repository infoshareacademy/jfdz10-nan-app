import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";
import "./App.css";
import NavList from "./nav/NavList.js";
import { Route } from "react-router-dom";
//import { navigationLinks } from "../public/routes.js/index.js";
import Cats from './breeds/Cats'
import Accessories from './accessories/Accessories'
import Breeders from './breeders/Breeders'

class App extends Component {
  render() {
    return (
      <Grid columns="equal" style={{height: "100vh"}}>
        <Grid.Column width={3} style={{backgroundColor: "#B66D49"}}>
            <NavList />
        </Grid.Column>
        <Grid.Column width={13}>
        <Route key="bleh" path="/cats" component={Cats} />
        <Route key="bleh2" path="/food-and-accessories" component={Accessories} />
        <Route key="bleh3" path="/breeders" component={Breeders} />
        </Grid.Column>
      </Grid>
    );
  }
}
export default App;