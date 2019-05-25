import React, { Component } from "react";
import { Table, Button, Input } from "semantic-ui-react";
import "./Profile.css";

import userActions from "../Redux/actions/userActions";
import handleSave from "../Redux/reducers/userReducer";
import { connect } from "react-redux";

class PersonalDataEdit extends Component {
  render() {
    const { currentUser, changeData, password, displayName, handleEdit, editId } = this.props;
    return (
        <form className="display-flex direction-column space-evenly" onSubmit={() => handleSave(displayName, password)}>
          <Table definition>
            <Table.Body>
              <Table.Row>
                <Table.Cell>E-mail</Table.Cell>
                <td>
                  <Input
                    required
                    id="displayName"
                    name="displayName"
                    type="text"
                    placeholder={currentUser.displayName}
                    value={displayName || currentUser.displayName}
                    onChange={input =>
                      changeData(input.currentTarget.name, input.target.value)
                    }
                  />
                </td>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Password</Table.Cell>
                <td>
                  <Input
                    required
                    name="password"
                    type="password"
                    id="password"
                    placeholder={currentUser.password}
                    autoComplete="current-password"
                    value={password || currentUser.password}
                    onChange={input =>
                      changeData(input.currentTarget.name, input.target.value)
                    }
                  />
                </td>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button className="blue-button" type="submit" onClick={() => handleEdit(!editId)}>
            Save Data
          </Button>
        </form>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  displayName: state.users.displayName,
  password: state.users.password
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalDataEdit);
