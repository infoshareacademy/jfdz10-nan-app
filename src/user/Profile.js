import React, { Fragment, Component } from "react";
import {
  Segment,
  Divider,
  Table,
  Image,
  Header
} from "semantic-ui-react";
import Favorites from './Favorites.js'
import "./Profile.css";
import StyledContent from "../sharedcomponents/StyledContent";
import {StyledSingleTitle} from "../sharedcomponents/StyledHeader"

import userActions from "../Redux/actions/userActions";
import { connect } from "react-redux";

class Profile extends Component {
  state = {
    user: {
      id: 1,
      login: "johndoe",
      password: "IloveCats",
      email: "johndoe@hotmail.com",
      img: "http://www.nan.jfdz10.is-academy.pl/icons/volunteer.svg",
      favoriteCats: [2, 5, 6],
      favoriteBreeders: [1, 3],
      favoriteAccessories: [1, 2]
    },
    cats: [],
    breeders: [],
    accessories: []
  };

  componentDidMount() {
  }

  render() {
    const currentUser = this.props.currentUser
    const userImage = {
      maxHeight: "320px"
    };

    return (
      <Fragment>
        <StyledContent>
        <StyledSingleTitle>
          <h1>Witaj, {currentUser.displayName}!</h1>
        </StyledSingleTitle>
          <Segment>
            <div className="user__characteristic">
              <Image
                style={userImage}
                src={currentUser.photoURL}
              />
              <div>
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
              </div>
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
  login: state.users.login,
  password: state.users.password
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);