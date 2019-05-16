import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Divider, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Nav.css";
import NavUserData from './NavUserData.js'
import NavLogo from './NavLogo.js'
import SignOutButton from '../auth/SignOut.js'

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
      <div style={{ backgroundColor: "#B66D49", width: "18.75vw", height: "100vh", position: "fixed" }}>
        <NavLogo />
        <NavUserData />
        <Divider inverted />
        <Container style={{ height: "45%" }}>
          <Button.Group vertical className="flex-center button-box padding-fifteen">
              <NavLink exact to="/logged">
                <Button className="navigation">
                  STRONA GŁÓWNA
                </Button>
              </NavLink>
            {this.state.elements.map(link => (
              <NavLink to={`/logged/${link.id}`} key={`/${link.id}`}>
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
