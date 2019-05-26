import React, { Component } from "react";

import { Button } from "semantic-ui-react";
import firebase from 'firebase';
import SignOutButton from "../auth/SignOut.js";

import "semantic-ui-css/semantic.min.css";
import { Header, Image } from "semantic-ui-react";
import "./Nav.css"

import userActions from "../Redux/actions/userActions";
import { connect } from "react-redux";

  state = {
    avatarUrl: '',
    user: null
};

getAvatarUrl = () => {
  if (this.state.user) {
      const uid = this.state.user.uid;
      firebase.storage().ref('/avatars/' + uid).getDownloadURL()
          .then(url => {
              this.setState({
                  avatarUrl: url,
              })
          })
          .catch(error => console.error(error));
  }
};

  componentDidMount() {
    const ref = firebase.auth().onAuthStateChanged(user => {
        this.setState({
            user: user
        }, () => this.getAvatarUrl())
    });
  
    this.setState({
        ref
    })
  }
  componentWillUnmount() {
    this.state.ref && this.state.ref();
  }
  
  render() {
    return (
      <Header
        as="h2"
        icon
        textAlign="center"
        className="flex-center"
        style={{ height: "25%" }}
      >
        <Image
          src={this.state.avatarUrl ? this.state.avatarUrl : this.props.currentUser.photoURL}
          size="small"
          circular
          className="navigation-user-image"
          centered
        />
        <Header.Content className="white-text">
          {this.props.currentUser.displayName}
        </Header.Content>
        <div className="padding-fifteen">
          <SignOutButton />
        </div>
      </Header>
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
)(NavUserData);
