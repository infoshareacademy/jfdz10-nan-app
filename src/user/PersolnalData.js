import React, { Component } from "react";
import {
  Table,
  Button
} from "semantic-ui-react";
import "./Profile.css";

import userActions from "../Redux/actions/userActions";
import { connect } from "react-redux";

class PersonalData extends Component {
  render() {
    const { currentUser, handleEdit, editId } = this.props
    return (
      <div className="display-flex direction-column space-evenly">
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Login</Table.Cell>
              <Table.Cell>{currentUser.displayName}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>E-mail</Table.Cell>
              <Table.Cell>{currentUser.email}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Button className="blue-button" onClick={() => handleEdit(!editId)}>
          Edit Data
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalData);
