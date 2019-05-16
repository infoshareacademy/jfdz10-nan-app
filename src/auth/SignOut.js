import React from "react";
import firebase from "firebase";
import { Button } from "semantic-ui-react";

const SignOutButton = () => {
  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <Button onClick={signOut}>
      WYLOGUJ
    </Button>
  );
};

export default SignOutButton;
