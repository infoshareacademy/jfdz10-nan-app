import React, { Fragment, Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import firebase from "firebase";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import NavList from "./nav/NavList.js";
import Content from "./content/Content";


import userActions from "./Redux/actions/userActions";
import WelcomeContent from "./auth/WelcomeContent";

var firebaseConfig = {
  apiKey: "AIzaSyAaYHQD_rpZ6o8hiIEfE1kuDR4VC9E3Ca0",
  authDomain: "jfdz10nan-app.firebaseapp.com",
  databaseURL: "https://jfdz10nan-app.firebaseio.com",
  projectId: "jfdz10nan-app",
  storageBucket: "jfdz10nan-app.appspot.com",
  messagingSenderId: "139164423329",
  appId: "1:139164423329:web:320b7435adbfe363"
};
firebase.initializeApp(firebaseConfig);

class App extends Component {

  componentDidMount() {
    this.props.fetchUser()
  }
  componentWillUnmount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div style={{ height: "100vh", display: "flex",
        background: `url(./cat_background2.jpg)`,
        margin: "0",
        padding: "0",
        width: "100vw" }}>
        <Switch>
          <Route
            path="/logged"
            component={() => {
              return this.props.currentUser ? (
                <Fragment>
                  <NavList />
                  <Content />
                </Fragment>
              ) : (
                <Redirect to="/access-denied" />
              );
            }}
          />
          <Route path="/" component={WelcomeContent} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
