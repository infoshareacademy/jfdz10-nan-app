import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import NavList from "./nav/NavList.js";
import Content from "./content/Content";
import firebase from 'firebase';

// var config = {
// 	apiKey: "AIzaSyBi-TWDaNo1F3bpf83wXrnrHGp_xATrhz0",
// 	authDomain: "restapi-67ae2.firebaseapp.com",
// 	databaseURL: "https://restapi-67ae2.firebaseio.com",
// 	projectId: "restapi-67ae2",
// 	storageBucket: "restapi-67ae2.appspot.com",
// 	messagingSenderId: "38220350901"
// };
// firebase.initializeApp(config);

// export const db = firebase.database();

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
