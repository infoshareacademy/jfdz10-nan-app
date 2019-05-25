import React, { Fragment, Component } from "react";
import firebase from "firebase";
import {
  Segment,
  Divider,
  Image,
  Header,
  Table,
  Input,
  Button
} from "semantic-ui-react";
import Favorites from "./Favorites";
import "./Profile.css";
import StyledContent from "../sharedcomponents/StyledContent";
import { StyledSingleTitle } from "../sharedcomponents/StyledHeader";

import userActions from "../Redux/actions/userActions";
import { connect } from "react-redux";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  componentWillUnmount() {
    this.props.fetchUser();
  }

  handleSaveLogin = () => {
    const { handleEdit, fetchUser, displayName } = this.props;
    const user = firebase.auth().currentUser;
    user.updateProfile({ displayName }).then(() => {
      handleEdit(null);
      fetchUser();
    });
  };
  handleSavePassword = () => {
    const { handleEdit, fetchUser, password } = this.props;
    const user = firebase.auth().currentUser;
    user.updatePassword({ password }).then(() => {
      handleEdit(null);
      fetchUser();
    });
  };

  render() {
    const {
      currentUser,
      changeData,
      password,
      displayName,
      handleEdit,
      editId,
      fetchUser
    } = this.props;
    const userDataSegment = {
      maxHeight: "320px"
    };
    console.error(currentUser.displayName);
    return (
      <Fragment>
        <StyledContent>
          <StyledSingleTitle>
            <h1>Witaj, {currentUser.displayName}!</h1>
          </StyledSingleTitle>
          <Segment>
            <div className={`${userDataSegment} display-flex space-evenly`}>
              <Image style={userDataSegment} src={currentUser.photoURL} />
              <div
                className={`${userDataSegment} display-flex direction-column space-evenly`}
              >
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Login</Table.Cell>

                      {editId === "displayName" ? (
                        <Fragment>
                          <Table.Cell>
                            <Input
                              required
                              id="displayName"
                              name="displayName"
                              type="text"
                              placeholder={currentUser.displayName}
                              value={displayName}
                              onChange={input =>
                                changeData(
                                  input.currentTarget.name,
                                  input.target.value
                                )
                              }
                            />
                            <Button
                              basic
                              icon="save outline"
                              onClick={this.handleSaveLogin}
                            />
                          </Table.Cell>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <Table.Cell className="display-flex space-evenly">
                            <div style={{ width: "180px" }}>
                              {currentUser.displayName}
                            </div>
                            <Button
                              basic
                              icon="edit"
                              onClick={() => handleEdit("displayName")}
                            />
                          </Table.Cell>
                        </Fragment>
                      )}
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Hasło</Table.Cell>
                      {editId === "password" ? (
                        <Table.Cell>
                          <Input
                            className="edit-input"
                            required
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Hasło"
                            value={password}
                            onChange={input =>
                              changeData(
                                input.currentTarget.name,
                                input.target.value
                              )
                            }
                          />
                          <Button
                            basic
                            icon="save outline"
                            onClick={() => {
                              firebase.auth().onAuthStateChanged(user => {
                                user.updatePassword(password);
                              });
                              fetchUser();
                              handleEdit(null);
                            }}
                          />
                        </Table.Cell>
                      ) : (
                        <Fragment>
                          <Table.Cell className="display-flex space-evenly">
                            <div style={{ width: "180px" }}>**************</div>
                            <Button
                              basic
                              icon="edit"
                              onClick={() => handleEdit("password")}
                            />
                          </Table.Cell>
                        </Fragment>
                      )}
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>E-mail</Table.Cell>
                      <Table.Cell className="display-flex space-evenly">
                        <div style={{ width: "180px" }}>
                          {currentUser.email}
                        </div>
                        <Button basic disabled icon="edit" />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Data dołączenia</Table.Cell>
                      <Table.Cell className="display-flex space-evenly">
                        <div style={{ width: "180px" }}>
                          {currentUser.createdAt}
                        </div>
                        <Button basic disabled icon="edit" />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
              <div>Favorite parameters go here (?)</div>
            </div>
            <Divider horizontal>
              <Header as="h2">Ulubione</Header>
            </Divider>
            <Favorites />
          </Segment>
        </StyledContent>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  displayName: state.users.displayName,
  password: state.users.password,
  editId: state.users.editId
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
