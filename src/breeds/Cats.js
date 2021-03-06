import React, { Component, Fragment } from "react";
import { Card, Button, Segment, Divider } from "semantic-ui-react";
import "./Cats.css";
import { Link } from "react-router-dom";
import { StyledHeader } from '../sharedcomponents/StyledHeader'
import StyledContent from "../sharedcomponents/StyledContent";
import CatSearch from "./CatSearch";
import CatSorter from "./CatSorter";

import userActions from "../Redux/actions/userActions";
import { connect } from "react-redux";

import firebase from 'firebase'

import StyledCardImage from '../sharedcomponents/StyledCardImage'

class Cats extends Component {
    state = {
        breeds: [],
        userData: null,
        userId: null,
        unsortedCats: [],
        filter: {
            text: ""
        },
        dir: null,
        icon: "heart"
    };

  getCats = () => {
        firebase.database().ref('breeds')
            .once("value")
            .then(cats => {
                this.setState({
                    breeds: Object.values(cats.val() || {}),
                    unsortedCats: Object.values(cats.val() || {}),
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
                        userData: Object.values(userData.val() || {}),
                    })
                })
        )

        this.getCats();
    }

    addLike = (breed) => {
        const data = {
            likeCount: breed.likeCount + 1
        }
    return (
    (!breed.favUsers || (breed.favUsers && breed.favUsers.length > 0 && !breed.favUsers.includes(firebase.auth().currentUser.uid)) || breed.favUsers === 0) 
      ? firebase.database().ref('breeds/' + breed.id).update(data)
            .then(() => {
                this.getCats()
            })
            .then(() =>
            firebase
                    .database()
                    .ref('breeds/' + breed.id + '/favUsers')
                    .update(
                        {[breed.favUsers ? breed.favUsers.length : 0]: firebase.auth().currentUser.uid}
                        )
                )       
                    
            .then(() =>
            (!this.state.userData.favCats || (this.state.userData.favCats && this.state.userData.favCats.length > 0 && !this.state.userData.favCats.includes(breed.id)))
                ? firebase
                    .database()
                    .ref('users/')
                    .child(firebase.auth().currentUser.uid)
                    .child('favCats')
                    .update({[(this.state.userData.favCats && this.state.userData.favCats.length > 0) ? this.state.userData.favCats.length : 0]: breed.id})
            
            : null)
            .then(() => this.getUserData())
            .then(() => this.props.fetchData("users", `users/${this.props.userId}`))

        : this.getCats()
    )
    }

    sortCats = (items, unsortedItems, dir) => {
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

    getCatsNames(items) {
        return items.filter(el => {
            const CatNameLowerCased = el.name.toLowerCase();
            const textFilterLowerCased = this.state.filter.text.toLowerCase();

            return (
                CatNameLowerCased.includes(textFilterLowerCased)
            );
        });
    }

    filterCatsInInput(filter) {
        this.setState({
            ...this.state,
            filter: {
                text: filter,
            }
        });
    }

    onDirChange = dir => {
        this.setState({
            dir
        });
    };

    getIcon = (breed) => {
        if (this.state.userData && this.state.userData.favCats && this.state.userData.favCats.length >= 0) {
            return this.state.userData.favCats.includes(breed.id) ? null : 'heart'
        } else {
            return 'heart'
        }
    }

    render() {
        const sortedCats = this.sortCats(
            this.state.breeds,
            this.state.unsortedCats,
            this.state.dir
        );
        const filteredCats = this.getCatsNames(sortedCats);
        return (
            <Fragment>
                <StyledContent>
                    <StyledHeader>
                        <h1 style={{paddingTop: '16px'}}>Rasy kotów</h1>

                    </StyledHeader>
                    <Segment>
                        <CatSorter
                            value={this.state.filter.text}
                            onSortDirection={this.onDirChange}
                            dir={this.state.dir}
                        />
                        <CatSearch
                            className="search__bar"
                            onInputChange={filter => this.filterCatsInInput(filter)}
                            value={this.state.filter.text}
                        />

                        <Divider/>
                        <Card.Group className="cat_card_group" itemsPerRow={2}>
                            {filteredCats.map((el) => {
                                return (
                                    <Card centered className="cat_card" key={el.id}>
                                        <Link to={`/logged/cats/${el.id}`}>
                                            <StyledCardImage
                                                style={{backgroundImage: `url(${el.image})`, height: "250px"}}/>
                                        </Link>
                                        <Card.Content className="cat_content">
                                            <Link className="cat_name" to={`/logged/cats/${el.id}`}>{el.name}</Link>
                                        </Card.Content>
                                        <Button
                                            className="cat_button"
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
                                    </Card>
                                );
                            })}
                        </Card.Group>
                    </Segment>
                </StyledContent>
            </Fragment>
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
  )(Cats);
