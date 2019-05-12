import React, { Component, Fragment } from "react";
import { Card, Button, Segment, Divider } from "semantic-ui-react";
import "./Cats.css";
import {Link } from "react-router-dom";
import {StyledHeader} from '../sharedcomponents/StyledHeader'
import StyledContent from "../sharedcomponents/StyledContent";
import CatSearch from "./CatSearch";
import CatSorter from "./CatSorter";

import StyledCardImage from '../sharedcomponents/StyledCardImage'

class Cats extends Component {
  state = {
    breeds: [],
    unsortedCats: [],
    filter: {
      text: ""
    },
    dir: null
  };

  componentDidMount() {
    fetch("/breeds.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          breeds: data,
          unsortedCats: data,
        });
      });
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
              {filteredCats.map(el => {
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
                      icon="heart"
                      label={{
                        basic: true,
                        color: "brown",
                        pointing: "left",
                        content: "2,048"
                      }}
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
