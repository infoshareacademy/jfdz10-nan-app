import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import SignOutButton from '../auth/SignOut.js'

import "semantic-ui-css/semantic.min.css";
import { Header, Image } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

import userActions from "../Redux/actions/userActions";
import { connect } from "react-redux";


class NavUserData extends Component {

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
          src={this.props.currentUser.img}
          size="small"
          circular
          className="navigation-user-image"
          centered
        />
        <Header.Content className="white-text">{this.props.currentUser.login}</Header.Content>
        <div>
        <NavLink to='/logged/profile'>
                <Button>
                  PROFIL
                </Button>
              </NavLink>
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





