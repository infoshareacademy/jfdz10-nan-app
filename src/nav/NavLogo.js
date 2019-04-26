import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

class NavLogo extends Component {
  render() {
    return (
        <div
          className="small-container flex-center blue-background padding-fifteen"
        >
          <img
            src={require("./cat4you-logo-white.png")}
            style={{ width: "100%" }}
            alt="catLogo"
          />
        </div>
    );
  }
}

export default NavLogo;