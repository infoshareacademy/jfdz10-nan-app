import React, { Component } from "react";
import { Card, Segment, Button, Divider } from "semantic-ui-react";
import {StyledHeader} from '../sharedcomponents/StyledHeader'
import StyledCardImage from '../sharedcomponents/StyledCardImage'
import StyledContent from "../sharedcomponents/StyledContent";
import {Link } from "react-router-dom";
import "../breeders/Breeders.css";
import BreederSearch from "./BreederSearch";
import BreederFilters from "./BreederFilters";
import firebase from 'firebase'
import userActions from "../Redux/actions/userActions";
import { connect } from "react-redux";

class Breeders extends Component {
  state = {
    breeders: [],
    userData: null,
    userId: null,
    unsortedBreeders: [],
    filter: {
      text: ""
    },
    dir: null,
    icon: "heart"
  };

  getBreeders = () => {
    firebase.database().ref('breeders')
        .once("value")
        .then(data => {
            this.setState({
                breeders: Object.values(data.val() || {}),
                unsortedBreeders: Object.values(data.val() || {}),
            })
        })
};

  getUserData = () => {
    if (this.state.userData.id) {
        firebase.database().ref('users/' + this.state.userData.id)
            .once("value")
            .then(userData => {
                this.setState({
                    userData: Object.values(userData.val() || {}),
                })
            })
    }

  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user =>
        firebase.database().ref('users/' + user.uid)
            .once("value")
            .then(userData => {
                this.setState({
                    userData: Object.values(userData.val() || {})
                })
            })
    )

    this.getBreeders();
  }

  addLike = (breeder) => {
    const data = {
        likeCount: breeder.likeCount + 1
    }
    return (
    (!breeder.favUsers || (breeder.favUsers && breeder.favUsers.length > 0 && !breeder.favUsers.includes(firebase.auth().currentUser.uid)) || breeder.favUsers === 0) 
      ? firebase.database().ref('breeders/' + breeder.id).update(data)
            .then(() => {
                this.getBreeders()
            })
            .then(() =>
            firebase
                .database()
                .ref('breeders/' + breeder.id + '/favUsers')
                .update(
                    {[breeder.favUsers ? breeder.favUsers.length : 0]: firebase.auth().currentUser.uid}
                    )
            )       
                
            .then(() =>
            (!this.state.userData.favBreeders || (this.state.userData.favBreeders && this.state.userData.favBreeders.length > 0 && !this.state.userData.favBreeders.includes(breeder.id)))
                ? firebase
                    .database()
                    .ref('users/')
                    .child(firebase.auth().currentUser.uid)
                    .child('favBreeders')
                    .update({[(this.state.userData.favBreeders && this.state.userData.favBreeders.length > 0) ? this.state.userData.favBreeders.length : 0]: breeder.id})
            
            : null)
            .then(() => this.getUserData())
            
            .then(() => this.props.fetchData("users", `users/${this.props.userId}`))

      : this.getBreeders()
)
}

  sortBreeders = (items, unsortedItems, dir) => {
    if (!dir) {
      return unsortedItems;
    } else {
      return [...items].sort((elA, elB) => {
        const fieldA = elA.name;
        const fieldB = elB.name;

        if (fieldA > fieldB) {
          return dir === "ASC" ? 1 : -1;
        } else if (fieldA === fieldB) {
          return 0;
        } else {
          return dir === "ASC" ? -1 : 1;
        }
      });
    }
  };

  getBreedersNames(items) {
    return items.filter(el => {
      const BreederNameLowerCased = el.name.toLowerCase();
      const textFilterLowerCased = this.state.filter.text.toLowerCase();

      return BreederNameLowerCased.includes(textFilterLowerCased);
    });
  }

  filterBreedersInInput(filter) {
    this.setState({
      ...this.state,
      filter: {
        text: filter
      }
    });
  }

  onDirChange = dir => {
    this.setState({
      dir
    });
  };

  getIcon = (breeder) => {
    if (this.state.userData && this.state.userData.favBreeders && this.state.userData.favBreeders.length >= 0) {
        return this.state.userData.favBreeders.includes(breeder.id) ? null : 'heart'
    } else {
        return 'heart'
    }
  }

  render() {
    const sortedBreeders = this.sortBreeders(
      this.state.breeders,
      this.state.unsortedBreeders,
      this.state.dir
    );
    const filteredBreeders = this.getBreedersNames(sortedBreeders);
    return (
      <StyledContent>
        <StyledHeader>
          <h1 style={{paddingTop: '16px'}}>Lista Hodowców</h1>
        </StyledHeader>
        <Segment>
        <BreederFilters
              value={this.state.filter.text}
              onSortDirection={this.onDirChange}
              dir={this.state.dir}
            />
            <BreederSearch
              className="search__bar"
              onInputChange={filter => this.filterBreedersInInput(filter)}
              value={this.state.filter.text}
            />

            <Divider />
          <Card.Group itemsPerRow={4} >
            {filteredBreeders.map(el => {
              return (
                <Card centered key={el.id}>
                  <Link to={`/logged/breeders/${el.id}`}>
                    <StyledCardImage style={{backgroundImage: `url(${el.img})`, height: "20vh"}}/>
                  </Link>
                  <Card.Content>
                    <Card.Header>
                      <Link style={{color: 'black'}} to={`/logged/breeders/${el.id}`}>
                      {el.name}
                      </Link>
                    </Card.Header>
                    <Card.Description>
                      {el.description}
                      <Link style={{fontWeight: 'bold'}}to={`/logged/breeders/${el.id}`}>
                        Więcej...
                      </Link>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra textAlign="center">
                    <Button
                      className="breeder__button"
                      color="brown"
                      content="Like"
                      icon={this.getIcon(el)}
                      label={{
                        basic: true,
                        color: "brown",
                        pointing: "left",
                        content: el.likeCount ? el.likeCount : 0
                      }}
                      onClick={() => this.addLike(el)}
                    />
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </Segment>
      </StyledContent>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.users.currentUser.uid
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Breeders);
