import React, { Component } from "react";
import { Card, Segment, Button, Divider } from "semantic-ui-react";
import {StyledHeader} from '../sharedcomponents/StyledHeader'
import StyledCardImage from '../sharedcomponents/StyledCardImage'
import StyledContent from "../sharedcomponents/StyledContent";
import {Link } from "react-router-dom";
import "../breeders/Breeders.css";
import BreederSearch from "./BreederSearch";
import BreederFilters from "./BreederFilters";

class Breeders extends Component {
  state = {
    breeders: [],
    unsortedBreeders: [],
    filter: {
      text: ""
    },
    dir: null
  };

  componentDidMount() {
    fetch("https://jfdz10nan-app.firebaseio.com/breeders.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          breeders: data,
          unsortedBreeders: data
        });
      });
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
                  <Link to={`breeders/${el.id}`}>
                    <StyledCardImage style={{backgroundImage: `url(${el.img})`, height: "20vh"}}/>
                  </Link>
                  <Card.Content>
                    <Card.Header>
                      <Link style={{color: 'black'}} to={`breeders/${el.id}`}>
                      {el.name}
                      </Link>
                    </Card.Header>
                    <Card.Description>
                      {el.description}
                      <Link style={{fontWeight: 'bold'}}to={`breeders/${el.id}`}>
                        Więcej...
                      </Link>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra textAlign="center">
                    <Button
                      className="breeder__button"
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

export default Breeders;
