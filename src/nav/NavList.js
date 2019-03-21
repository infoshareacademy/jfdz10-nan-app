import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { navigationLinks } from "./routes";
import { Button, Divider, Container, Header, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <div className="small-container">
          <img src="" />
        </div>
        <Container>
          <Image
            src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-6/512/Square-icon.png"
            size="small"
            circular
          />
          <Header as="h2" icon textAlign="center">
            <Header.Content style={{ color: "#1BD3E8" }}>
              John Doe
            </Header.Content>
          </Header>
          <Divider inverted />
        </Container>
        <Container>
          <Button.Group vertical>
            {navigationLinks.map(link => (
              <NavLink to={`/${link.id}`} key={`/${link.id}`}>
                <Button>{link.label.toUpperCase()}</Button>
              </NavLink>
            ))}
          </Button.Group>
        </Container>
        <div className="small-container">
          <p>Property of Cat4You</p>
        </div>
      </Fragment>
    );
  }
}

export default Nav;