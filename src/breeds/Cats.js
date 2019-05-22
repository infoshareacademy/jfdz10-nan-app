import React, { Component, Fragment } from "react";
import { Card, Button, Segment, Divider } from "semantic-ui-react";
import "./Cats.css";
import {Link } from "react-router-dom";
import {StyledHeader} from '../sharedcomponents/StyledHeader'
import StyledContent from "../sharedcomponents/StyledContent";
import CatSearch from "./CatSearch";
import CatSorter from "./CatSorter";

import firebase from 'firebase'

import StyledCardImage from '../sharedcomponents/StyledCardImage'

class Cats extends Component {
  state = {
    breeds: [],
    // user: null
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
               breeds: cats.val(),
               unsortedCats: cats.val(),
              })
         })
};

  componentDidMount() {
    this.getCats()
    // firebase.auth().onAuthStateChanged(user => {
    //     this.setState({
    //         user
    //     })
    // })
  }

  addLike = (breed,index) => {
    const data = {
      likeCount: breed.likeCount + 1
    }

    firebase.database().ref('breeds/' + index).update(data)
    .then(() => this.setState({
              icon: null
       }))
    .then(() => this.getCats())

    .then(() =>
            firebase
            .database()
            .ref('breeds/' + index + '/favUsers')
            .update(
              {id: firebase.auth().currentUser.uid}
              )
    )
    .then(() =>
            firebase
            .database()
            .ref('users/')         
            .child(firebase.auth().currentUser.uid)
            .update({favCatsId: breed.id})
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
          <Segment >
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

            <Divider />
            <Card.Group className="cat_card_group" itemsPerRow={2}>
              {filteredCats.map((el,i) => {
                return (
                  <Card centered className="cat_card" key={el.id}>
                    <Link to={`cats/${el.id}`}>
                      <StyledCardImage style={{backgroundImage: `url(${el.image})`, height: "250px"}}/>
                    </Link> 
                    <Card.Content className="cat_content">        
                      <Link className="cat_name" to={`cats/${el.id}`}>{el.name}</Link>
                    </Card.Content>
                    <Button
                      className="cat_button"
                      color="brown"
                      content="Like"
                      icon={this.state.icon}
                      label={{
                        basic: true,
                        color: "brown",
                        pointing: "left",
                        content: el.likeCount ? el.likeCount : 0
                      }}
                      // {this.state.user ?
                      onClick={() => this.addLike(el,i)}
                    //   : null
                    // }
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

export default Cats;
