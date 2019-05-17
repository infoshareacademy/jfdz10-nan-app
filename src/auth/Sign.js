import React, { Component, Fragment } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { Button, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { connect } from "react-redux";

import userActions from "../Redux/actions/userActions";

class Sign extends Component {
  handleSubmit = event => {
    event.preventDefault();

    if (this.props.isSignUp) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.props.email, this.props.password)

        .then(() => {
          setTimeout(() => {
            this.props.history.push("/logged");
          }, 100);
        })

        .catch(error => {
          alert(error.message);
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.props.email, this.props.password)

        .then(() => {
          setTimeout(() => {
            this.props.history.push("/logged");
          }, 100);
        })
        .catch(error => {
          alert(error.message);
        });
    }
  };

  render() {
    const title = this.props.isSignUp ? "Rejestracja" : "Logowanie";

    return (
      <main>
        <h1>{title}</h1>
        <form onSubmit={this.handleSubmit}>
          {/* {this.props.isSignUp? 
          <Fragment>
          <Input
          id="login"
          name="login"
          placeholder="Login"
          value={this.state.login}
          onChange={input => changeData(input.target.value)}
          required
        />
        <br /></Fragment> : null} */}
          <Input
            id="email"
            name="email"
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
          <br />

          <Input
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
          <br />
          <Button type="submit">{title}</Button>
        </form>
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
      </main>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  email: state.users.email,
  password: state.users.password
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sign);
