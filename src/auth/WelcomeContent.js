import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Welcome from "./Welcome";
import Sign from "./Sign";
import { Image } from "semantic-ui-react";

class WelcomeContent extends Component {
  render() {
    return (
      <main style={{alignSelf:"center",
        paddingLeft: "20vw",
        width: "60vw",
        height: "100vw",
        paddingTop: "40vh"}}>
        
        <Image src={require("./cat4you-logo-white.png")} />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/sign-in" component={Sign} />
        <Route exact path="/sign-up" component={() => <Sign isSignUp />} />
      </main>
    );
  }
}

export default WelcomeContent;
