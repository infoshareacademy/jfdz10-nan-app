import React, { Component, Fragment } from "react";
import { Button, Image, Card, Segment, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { StyledHeader } from "../sharedcomponents/StyledHeader";
import StyledContent from "../sharedcomponents/StyledContent";
import AccessorySearch from "./AccessorySearch";
import AccessoriesFilters from "./AccessoriesFilters";
import CartStatus from "./CartStatus";
import firebase from "firebase";

import "./Accessories.css";

class Accessories extends Component {
  state = {
    accessories: [],
    unsortedAccessories: [],
    categories: [],
    filter: {
      text: "",
      category: ""
    },
    dir: null
  };

  componentDidMount() {
    const accessoriesRef = firebase.database().ref("feed-and-accessories");

    accessoriesRef.once("value").then(snapshot => {
      const data = snapshot.val() || [];
      const categories = data.map(accessory => {
        return accessory.category;
      });
      this.setState({
        accessories: data,
        unsortedAccessories: data,
        categories: [...new Set(categories)]
      });
    });

    accessoriesRef.on("value", snapshot => {
      const data = snapshot.val() || [];
      const categories = data.map(accessory => {
        return accessory.category;
      });
      this.setState({
        accessories: data,
        unsortedAccessories: data,
        categories: [...new Set(categories)]
      });
    });
  }


  sortAccessories = (items, unsortedItems, dir) => {
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
  
  getAccessoriesNames(items) {
    return items.filter(el => {
      const AccessoryNameLowerCased = el.name.toLowerCase();
      const textFilterLowerCased = this.state.filter.text.toLowerCase();
      const accessoryCategory = el.category;
      const categoryFilter = this.state.filter.category;

      return (
        AccessoryNameLowerCased.includes(textFilterLowerCased) &&
        accessoryCategory.includes(categoryFilter)
      );
    });
  }

  filterAccessoriesInInput(filter) {
    this.setState({
      ...this.state,
      filter: {
        text: filter,
        category: this.state.filter.category
      }
    });
  }

  filterAccessoriesByCategory(filter) {
    this.setState({
      ...this.state,
      filter: {
        ...filter,
        text: this.state.filter.text
      }
    });
  }

  onDirChange = dir => {
    this.setState({
      dir
    });
  };

  render() {
    const sortedAccesories = this.sortAccessories(
      this.state.accessories,
      this.state.unsortedAccessories,
      this.state.dir
    );

    const filteredAccessories = this.getAccessoriesNames(sortedAccesories);
    return (
      <Fragment>
        <StyledContent>
          <StyledHeader>
            <h1 style={{ paddingTop: "16px" }}>Karmy i akcesoria</h1>
            <CartStatus />
          </StyledHeader>
          <Segment>
            <AccessoriesFilters
              onCategoryChange={filter =>
                this.filterAccessoriesByCategory(filter)
              }
              categories={this.state.categories}
              value={this.state.filter.text}
              onSortDirection={this.onDirChange}
              dir={this.state.dir}
            />
            <AccessorySearch
              onInputChange={filter => this.filterAccessoriesInInput(filter)}
              value={this.state.filter.text}
            />
            <Divider />
            <Card.Group itemsPerRow={5} stackable>
              {filteredAccessories.map(el => (
                <Card key={el.id}>
                  <Image src={el.img} />

                  <Card.Content>
                    <Card.Header>{el.name}</Card.Header>
                    <Card.Meta>{el.producer}</Card.Meta>
                    <Card.Description>{el.description}</Card.Description>
                  </Card.Content>

                  <Card.Content extra>
                    <Link to={`/logged/food-and-accessories/${el.id}`}>
                      <Button
                        size="small"
                        className="blue-button"
                        content="Zobacz"
                      />
                    </Link>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Segment>
        </StyledContent>
      </Fragment>
    );
  }
}

export default Accessories;
