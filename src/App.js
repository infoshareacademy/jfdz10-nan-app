import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react';
import "./App.css";
import Breeders from './breeders/Breeders'

class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={13}>
            <Breeders />
        </Grid.Column>
      </Grid>
    );
  }
}
export default App;