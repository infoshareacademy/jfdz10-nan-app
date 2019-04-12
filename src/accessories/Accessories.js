import React, { Component, Fragment } from "react";
import { Button, Image, Card, Segment, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

import AccessorySearch from "./AccessorySearch";
import AccessoriesFilters from "./AccessoriesFilters";

import "./Accessories.css";

class Accessories extends Component {
  state = {
    accessories: [],
    categories: [],
    filter: {
      text: "",
      category: ""
    },
    dir: "DESC"
  };

  componentDidMount() {
    fetch("/feed-and-accessories.json")
      .then(response => response.json())
      .then(data => {
        const categories = data.map(accessory => {
          return accessory.category;
        });

        this.setState({
          accessories: data,
          categories: [...new Set(categories)]
        });
      });
  }


 

  getAccessoriesNames() {
    return this.state.accessories
    .sort((elA, elB) => {
      const fieldA = elA.name;
      const fieldB = elB.name;

      if (fieldA > fieldB) {
          return this.state.dir === 'ASC' ? 1 : -1;
      } else if (fieldA === fieldB) {
          return 0;
      } else {
          return this.state.dir === 'DESC' ? -1 : 1;
      }
  })  
      .filter(el => {
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
    })
  }

  filterAccessoriesByCategory(filter) {
    this.setState({
      ...this.state,
      filter: {
        ...filter,
        text: this.state.filter.text
      }
    })
  }

  onDirChange = (dir) => {
    this.setState({dir});
};

  render() {
    return (
      <Fragment>
        <div className="accessories__container">
          <div className="accessories__bar">
            <h1>Karmy i akcesoria</h1>
            <AccessorySearch
              onInputChange={(filter) => this.filterAccessoriesInInput(filter)}
              value={this.state.filter.text}
            />
          </div>
          <Segment>
            <AccessoriesFilters
              onCategoryChange={(filter) => this.filterAccessoriesByCategory(filter)}
              categories={this.state.categories}
              value={this.state.filter.text}
              onSortDirection={this.onDirChange}
              dir = {this.state.dir}
            />

            <Divider />
            <Card.Group itemsPerRow={5} stackable>
              {this.getAccessoriesNames().map(el => (
                <Card key={el.id}>
                  <Image src={el.img} />

                  <Card.Content>
                    <Card.Header>{el.name}</Card.Header>
                    <Card.Meta>{el.producer}</Card.Meta>
                    <Card.Description>{el.description}</Card.Description>
                  </Card.Content>

                  <Card.Content extra>
                    <Link to={`/food-and-accessories/${el.id}`}>
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
        </div>
      </Fragment>
    );
  }
}

export default Accessories;
