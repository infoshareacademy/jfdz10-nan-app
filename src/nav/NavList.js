import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Divider, Container, Header, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Nav.css";

class Nav extends Component {
  state = {
    elements: []
  };

  componentDidMount() {
    fetch("https://jfdz10nan-app.firebaseio.com/routes.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          elements: data
        });
      });
  }

  render() {
    return (
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
        <Divider inverted />
        <Container style={{ height: "45%" }}>
          <Button.Group vertical className="flex-center button-box padding-fifteen">
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
