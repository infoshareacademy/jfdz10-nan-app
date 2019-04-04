import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Divider, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Nav.css";
import NavUserData from './NavUserData.js'
import NavLogo from './NavLogo.js'

class Nav extends Component {
  state = {
    elements: []
  };

  componentDidMount() {
    fetch("/routes.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          elements: data
        });
      });
  }

  render() {
    return (
<<<<<<< HEAD
      <div style={{ backgroundColor: "#B66D49", width: "18.75vw", height: "100vh", position: "fixed" }}>
        <NavLogo />
        <NavUserData />
=======
      <div style={{ backgroundColor: "#B66D49", width: "18.75vw", height: "100vh" }}>
        <div
          className="small-container flex-center blue-background padding-fifteen"
        >
          <img
            alt={'logo'}
            src={require("./cat4you-logo-white.png")}
            style={{ width: "100%" }}
          />
        </div>
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
        </Header>
>>>>>>> 18e106db2fc12d7600768ba53f4f6551a6672a48
        <Divider inverted />
        <Container style={{ height: "45%" }}>
          <Button.Group vertical className="flex-center button-box padding-fifteen">
              <NavLink exact to="/">
                <Button className="navigation">
                  STRONA GŁÓWNA
                </Button>
              </NavLink>
            {this.state.elements.map(link => (
              <NavLink to={`/${link.id}`} key={`/${link.id}`}>
                <Button className="navigation">
                  {link.label.toUpperCase()}
                </Button>
              </NavLink>
            ))}
          </Button.Group>
        </Container>
        <Divider inverted />
        <div className="small-container flex-center white-text">
          <p style={{alignSelf: "center"}}>Property of Cat4You</p>
        </div>
      </div>
    );
  }
}

export default Nav;
