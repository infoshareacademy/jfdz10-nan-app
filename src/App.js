import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import NavList from "./nav/NavList.js";
import Content from "./content/Content";

// import firebase from 'firebase'

// const config = {
//   apiKey: "AIzaSyCiwlpRa5tNi4pLlVCPc18XYkYBixDURQc",
//   authDomain: "magda1-f9cd0.firebaseapp.com",
//   databaseURL: "https://magda1-f9cd0.firebaseio.com",
//   projectId: "magda1-f9cd0",
//   storageBucket: "magda1-f9cd0.appspot.com",
//   messagingSenderId: "763234686273"
// };
// firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh", display: "flex" }}>
          <NavList />
          <Content />
      </div>
    );
  }
}

export default App;
