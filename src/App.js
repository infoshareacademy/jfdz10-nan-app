import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import NavList from "./nav/NavList.js";
import Content from "./content/Content";

import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAaYHQD_rpZ6o8hiIEfE1kuDR4VC9E3Ca0",
  authDomain: "jfdz10nan-app.firebaseapp.com",
  databaseURL: "https://jfdz10nan-app.firebaseio.com",
  projectId: "jfdz10nan-app",
  storageBucket: "jfdz10nan-app.appspot.com",
  messagingSenderId: "139164423329",
  appId: "1:139164423329:web:320b7435adbfe363"
};
firebase.initializeApp(config);


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
