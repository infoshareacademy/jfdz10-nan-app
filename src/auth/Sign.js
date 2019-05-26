import React, { Component, Fragment } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import {
  Button,
  Input,
  Grid,
  Header,
  Image,
  Form,
  Segment,
  Message
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { connect } from "react-redux";

import userActions from "../Redux/actions/userActions";

class Sign extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const now = new Date();
    const joinDate = now.toDateString();
    if (this.props.isSignUp) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.props.email, this.props.password)
        .then(() =>
          firebase.auth().currentUser.updateProfile({
            displayName: this.props.displayName,
            photoURL:
              "https://react.semantic-ui.com/images/wireframe/square-image.png"
          })
        )
        .then(() =>
          firebase
            .database()
            .ref("users")
            .child(firebase.auth().currentUser.uid)
            .set({ id: firebase.auth().currentUser.uid, joinDate })
        )
        .then(() => (window.location.href = "/logged"))
        .catch(error => {
          alert(error.message);
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.props.email, this.props.password)
        .then(() => (window.location.href = "/logged"))
        .catch(error => {
          console.log(error.message);
        });
    }
  };

  render() {
    const title = this.props.isSignUp ? "Rejestracja" : "Logowanie";

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
                {title}
              </Header>
              <Form size="large" onSubmit={this.handleSubmit}>
                <Segment stacked>
                  {this.props.isSignUp ? (
                    <Fragment>
                      <Form.Input
                        id="displayName"
                        name="displayName"
                        type="text"
                        placeholder="Login"
                        value={this.props.displayName}
                        onChange={input =>
                          this.props.changeData(
                            input.currentTarget.name,
                            input.target.value
                          )
                        }
                        required
                        fluid
                        icon="user"
                        iconPosition="left"
                      />
                    </Fragment>
                  ) : null}
                  <Form.Input
                    fluid
                    icon="mail outline"
                    iconPosition="left"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-Mail"
                    value={this.props.email}
                    onChange={input =>
                      this.props.changeData(
                        input.currentTarget.name,
                        input.target.value
                      )
                    }
                    required
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Hasło"
                    autoComplete="current-password"
                    value={this.props.password}
                    onChange={input =>
                      this.props.changeData(
                        input.currentTarget.name,
                        input.target.value
                      )
                    }
                    required
                  />

                  <Button
                    style={{ backgroundColor: "#1BD3E8", color: "#fff" }}
                    fluid
                    size="large"
                  >
                    {title}
                  </Button>
                </Segment>
              </Form>
              <Message>
                {this.props.isSignUp ? (
                  <Fragment>
                    <p>
                      Masz już konto? <Link to="/sign-in">Zaloguj się</Link>
                    </p>
                  </Fragment>
                ) : (
                  <Fragment>
                    <p>
                      Nie masz konta? <Link to="/sign-up">Zarejestruj się</Link>
                    </p>
                  </Fragment>
                )}
              </Message>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  displayName: state.users.displayName,
  email: state.users.email,
  password: state.users.password
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sign);
