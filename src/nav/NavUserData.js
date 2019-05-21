import React, { Component } from "react";
import { Header, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import SignOutButton from '../auth/SignOut.js'
import { NavLink } from "react-router-dom";

import { Button } from "semantic-ui-react";


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
          src={require("./cat4you-sign-white.png")}
          size="small"
          circular
          className="navigation-user-image"
          style={{ backgroundColor: "gray", width: "150px", height: "150px" }}
        />
        <Header.Content className="white-text">John Doe</Header.Content>
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

export default NavUserData;





