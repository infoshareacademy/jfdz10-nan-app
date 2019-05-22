import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


class Welcome extends Component {

  render() {

    return (
        <main>
          <h1>Witaj!</h1>
          <Link to="/sign-in">
            <Button>Logowanie</Button>
          </Link>
          <Link to="/sign-up">
            <Button>Rejestracja</Button>
          </Link>
        </main>
    );
  }
}

export default Welcome;
