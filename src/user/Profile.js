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
    // avatarUrl: '',
    // user: null,
    cats: [],
    breeders: [],
    accessories: []
  };


//   handleAdd = () => {
//     if (this.state.user) {
//         firebase.storage().ref('/users/' + this.state.user.uid).put(this.state.file)
//             .then(() => {
//                 alert('dodano pomyslnie');
//                 this.getAvatarUrl();
//                 this.setState({
//                     file: null
//                 })
//             })
//             .catch(error => console.error(error));
//     }
// };

// getUserUrl = () => {
//     if (this.state.user) {
//         const uid = this.state.user.uid;
//         firebase.database().ref('/avatars/' + uid).getDownloadURL()
//             .then(url => {
//                 this.setState({
//                     avatarUrl: url,
//                 })
//             })
//             .catch(error => console.error(error));
//     }
// };

// componentDidMount() {
//     const ref = firebase.auth().onAuthStateChanged(user => {
//         this.setState({
//             user: user
//         }, () => this.getUserUrl())
//     });

//     this.setState({
//         ref
//     })
// }

  componentDidMount() {
    fetch("https://jfdz10nan-app.firebaseio.com/breeds.json")
      .then(r => r.json())
      .then(data => this.setState({cats: data}))
    fetch("https://jfdz10nan-app.firebaseio.com/breeders.json")
      .then(r => r.json())
      .then(data => this.setState({breeders: data}))
    fetch("https://jfdz10nan-app.firebaseio.com/feed-and-accessories.json")
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
        <StyledContent>
        <StyledSingleTitle>
          <h1>Witaj, {user.login}!</h1>
        </StyledSingleTitle>
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
                      <Table.Cell>Login</Table.Cell>
                      <Table.Cell>{user.login}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>E-mail</Table.Cell>
                      <Table.Cell>{user.email}</Table.Cell>
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
        </StyledContent>
      </Fragment>
    );
  }
}

export default Profile;
