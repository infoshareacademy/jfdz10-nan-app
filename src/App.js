import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import NavList from "./nav/NavList.js";
import Content from "./content/Content";


class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh", display: "flex" }}>
          <NavList />
          <Content />
      </div>
    );
  }
}

export default App;
