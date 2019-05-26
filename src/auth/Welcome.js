import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Header, Form, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Welcome extends Component {
  render() {
    return (
      <div className="login-form">
        <style>
          {`
body > div,
body > div > div,
body > div > div > div.login-form {
  height: 100%;
}
`}
        </style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" style={{ color: "#1BD3E8" }} textAlign="center">
              Witaj!
            </Header>
            <Form size="large">
              <Segment stacked>
                  <Link to="/sign-in">
                    <Button
                      style={{ backgroundColor: "#1BD3E8", color: "#fff", margin: "0 0 1em" }}
                      fluid
                      size="large"
                    >
                      Logowanie
                    </Button>
                  </Link>
                <Link to="/sign-up">
                  <Button
                    style={{ backgroundColor: "#1BD3E8", color: "#fff" }}
                    fluid
                    size="large"
                  >
                    Rejestracja
                  </Button>
                </Link>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Welcome;
