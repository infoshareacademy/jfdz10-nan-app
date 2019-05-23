import React, { Component } from "react";
import { Header, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import SignOutButton from '../auth/SignOut.js'
import { NavLink } from "react-router-dom";

import { Button } from "semantic-ui-react";
import firebase from 'firebase';

class NavUserData extends Component {
//   state = {
//     avatarUrl: '',
//     user: null,
//     file: null
// };

// handleOnInputFileChange = (event) => {
//   this.setState({
//       file: event.target.files[0]
//   })
// };

// handleRemove = () => {
//   if (this.state.user) {
//       firebase.storage().ref('/avatars/' + this.state.user.uid).delete()
//           .then(() => {
//               alert('usunieto pomyslnie');
//               this.getAvatarUrl();
//           })
//           .catch(error => console.error(error));
//   }
// };

// handleAdd = () => {
//   if (this.state.user) {
//       firebase.storage().ref('/avatars/' + this.state.user.uid).put(this.state.file)
//           .then(() => {
//               alert('dodano pomyslnie');
//               this.getAvatarUrl();
//               this.setState({
//                   file: null
//               })
//           })
//           .catch(error => console.error(error));
//   }
// };

// getAvatarUrl = () => {
//   if (this.state.user) {
//       const uid = this.state.user.uid;
//       firebase.storage().ref('/avatars/' + uid).getDownloadURL()
//           .then(url => {
//               this.setState({
//                   avatarUrl: url,
//               })
//           })
//           .catch(error => console.error(error));
//   }
// };

// componentDidMount() {
//   const ref = firebase.auth().onAuthStateChanged(user => {
//       this.setState({
//           user: user
//       }, () => this.getAvatarUrl())
//   });

//   this.setState({
//       ref
//   })
// }

// componentWillUnmount() {
//   this.state.ref && this.state.ref();
// }

  render() {
    return (
      <Header
        as="h2"
        icon
        textAlign="center"
        className="flex-center"
        style={{ height: "25%" }}
      >
        <Image
          src={require("./cat4you-sign-white.png")}
          size="small"
          circular
          className="navigation-user-image"
          style={{ backgroundColor: "gray", width: "150px", height: "150px" }}
        />
        <Header.Content className="white-text">John Doe</Header.Content>
        <div>
        <NavLink to='/logged/profile'>
                <Button>
                  PROFIL
                </Button>
              </NavLink>
              <SignOutButton />
        </div>
      </Header>
    );
  }
}

export default NavUserData;





