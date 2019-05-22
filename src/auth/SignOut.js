import React from "react";
import firebase from "firebase";
import { Button } from "semantic-ui-react";

import { connect } from "react-redux";

import userActions from "../Redux/actions/userActions";

const SignOutButton = () => {
  const signOut = () => {
    firebase.auth().signOut()
    .then(() =>this.props.fetchUser())
  };

  return (
    <Button onClick={signOut}>
      WYLOGUJ
    </Button>
  );
};

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignOutButton);
