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

class Profile extends Component {
  state = {
    user: {
      id: 1,
      login: "johndoe",
      password: "IloveCats",
      eMail: "johndoe@hotmail.com",
      name: "John",
      lastName: "Doe",
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
    fetch('/breeds.json')
      .then(r => r.json())
      .then(data => this.setState({cats: data}))
    fetch('/breeders.json')
      .then(r => r.json())
      .then(data => this.setState({breeders: data}))
    fetch('/feed-and-accessories.json')
      .then(r => r.json())
      .then(data => this.setState({accessories: data}))
  }

  handleDelete = (elementId, keyFav) => {
    this.setState({user: {...this.state.user, [keyFav]: this.state.user[keyFav].filter( id => id !== elementId)}})
 }

  render() {
    const { user } = this.state;
    const userImage = {
      maxHeight: "320px"
    };

    return (
      <Fragment>
        <div className="profile__container">
          <div className="profile__bar">
            <h1>Witaj, {user.name}!</h1>
          </div>
          <Segment>
            <div className="user__characteristic">
              <Image
                style={userImage}
                src={user.img}
              />
              <div>
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={10}>Imię</Table.Cell>
                      <Table.Cell>{`${user.name} ${user.lastName}`}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Login</Table.Cell>
                      <Table.Cell>{user.login}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>E-mail</Table.Cell>
                      <Table.Cell>{user.eMail}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </div>

            <Divider horizontal>
              <Header as="h2">Ulubione</Header>
            </Divider>
            <Favorites name="Koty" favKey="favoriteCats" parameter={user.favoriteCats} labels={this.state.cats} onDelete={this.handleDelete}/>
            <Favorites name="Hodowle" favKey="favoriteBreeders" parameter={user.favoriteBreeders} labels={this.state.breeders} onDelete={this.handleDelete}/>
            <Favorites name="Akcesoria" favKey="favoriteAccessories" parameter={user.favoriteAccessories} labels={this.state.accessories} onDelete={this.handleDelete}/>
          </Segment>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
