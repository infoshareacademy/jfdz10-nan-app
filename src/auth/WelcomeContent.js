import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Welcome from "./Welcome";
import Sign from "./Sign";


class WelcomeContent extends Component {

  render() {

    return (
      <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/sign-in" component={Sign} />
      <Route exact path="/sign-up" component={() => <Sign isSignUp />} /></Switch>
    );
  }
}

export default WelcomeContent;