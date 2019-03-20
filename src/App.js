

import React, { Component, Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";
import "./App.css";
import NavList from "./nav/NavList.js";
import { BrowserRouter, Route } from "react-router-dom";


//import { navigationLinks } from "../public/routes.js/index.js";
import Cats from './breeds/Cats'
import Accessories from './accessories/Accessories'
import SingleAccessory from './accessories/SingleAccessory'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Grid columns="equal" style={{height: "100vh"}}>
        <Grid.Column width={3} style={{backgroundColor: "#B66D49"}}>
            <NavList />
        </Grid.Column>
        <Grid.Column width={13}>
        <Route key="bleh" path="/cats" component={Cats} />
        <Route key="bleh2" path="/food-and-accessories" component={Accessories} />
        
        </Grid.Column>
        
      </Grid>


      <Route path="/food-and-accessories/:id/" component={SingleAccessory}/>
      </BrowserRouter>
      
      
      
      
    );
  }
}

export default App;
