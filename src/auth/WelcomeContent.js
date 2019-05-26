import React, { Component } from "react";
import { Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Welcome from "./Welcome";
import Sign from "./Sign";
import { Image } from "semantic-ui-react";

class WelcomeContent extends Component {
  render() {
    return (
      <main style={{alignSelf:"center",
        width: "60vw",
        height: "100%"}}>
        
        <Image src={require("./cat4you-logo-white.png")} style={{maxWidth: "450px", margin: "auto", marginTop: "25%"}} />
        
        <Route exact path="/access-denied" component={() => <Welcome isAccessDenied />} />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/sign-in" component={Sign} />
        <Route exact path="/sign-up" component={() => <Sign isSignUp />} />
      </main>
    );
  }
}

export default WelcomeContent;
