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
      text: '',
      category: '',
    }
  };

  componentDidMount() {
    fetch("/feed-and-accessories.json")
      .then(response => response.json())
      .then(data => {

        const categories = data.map((accessory) => {
          return accessory.category;
        });

        this.setState({
          accessories: data,
          categories: [...new Set(categories)]
        })
      });
  }

  

  getAccessoriesNames() {
    return this.state.accessories
      .filter(el =>  {
            const AccessoryNameLowerCased = el.name.toLowerCase();
            const textFilterLowerCased = this.state.filter.text.toLowerCase();
            
            return AccessoryNameLowerCased.includes(textFilterLowerCased);
        }
    )
}



  render() {
    return (
      <Fragment>
        <div className="accessories__container">
          <div className="accessories__bar">
            <h1>Karmy i akcesoria</h1>
            <AccessorySearch onFilterChange={filter => this.setState({filter})}/>
          </div>
          <Segment>
            <AccessoriesFilters onFilterChange={filter => this.setState({filter})} categories={this.state.categories}/>
            <Divider />
            <Card.Group itemsPerRow={5} stackable>
              {this.getAccessoriesNames()
                .map(el => (
                  <Card key={el.id}>
                    <Image src={el.img} />

                    <Card.Content>
                      <Card.Header>{el.name}</Card.Header>
                      <Card.Meta>{el.producer}</Card.Meta>
                      <Card.Description>{el.description}</Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                      <Link to={`/food-and-accessories/${el.id}`}>
                        <Button size="small" className="blue-button" content="Zobacz" />
                      </Link>
                    </Card.Content>
                  </Card>
                ))
              }
            </Card.Group>
          </Segment>
        </div>
      </Fragment>
    );
  }
}

export default Accessories;
