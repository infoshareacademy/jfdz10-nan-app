import React, { Component, Fragment } from "react";
import { Card, Image, Item } from "semantic-ui-react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import GraphOne from "../graph/GraphOne";
import GraphTwo from "../graph/GraphTwo";

class Dashboard extends Component {
  state = {
    elements: []
  };

  componentDidMount() {
    fetch("/routes.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          elements: data
        });
      });
  }

  render() {
    return (
      <Fragment>
        <div className="dashboard-container">
          <div className="dashboard-card-box">
            <Link to="/profile">
              <Card id="profile" className="dashboard-grid-content">
                <Image
                  src="http://www.nan.jfdz10.is-academy.pl/icons/love.svg"
                  className="image-background"
                />
                <Card.Content>
                  <Item>
                    <Item.Content verticalAlign="middle">
                      <Item.Header className="dashboard-header">
                        Profil
                      </Item.Header>
                    </Item.Content>
                  </Item>
                </Card.Content>
              </Card>
            </Link>
            <Link to="/cats">
              <Card id="cats" className="dashboard-grid-content">
                <Image
                  src="http://www.nan.jfdz10.is-academy.pl/icons/magnifying-glass.svg"
                  className="image-background"
                />
                <Card.Content>
                  <Item>
                    <Item.Content verticalAlign="middle">
                      <Item.Header className="dashboard-header">
                        Koty
                      </Item.Header>
                    </Item.Content>
                  </Item>
                </Card.Content>
              </Card>
            </Link>
            <Link to="/breeders">
              <Card id="breeders" className="dashboard-grid-content">
                <Image
                  src="http://www.nan.jfdz10.is-academy.pl/icons/volunteer.svg"
                  className="image-background"
                />
                <Card.Content>
                  <Item>
                    <Item.Content verticalAlign="middle">
                      <Item.Header className="dashboard-header">
                        Hodowcy
                      </Item.Header>
                    </Item.Content>
                  </Item>
                </Card.Content>
              </Card>
            </Link>
            <Link to="/food-and-accessories">
              <Card
                id="food-and-accessories"
                className="dashboard-grid-content"
              >
                <Image
                  src="http://www.nan.jfdz10.is-academy.pl/icons/pet-food.svg"
                  className="image-background"
                />
                <Card.Content>
                  <Item>
                    <Item.Content verticalAlign="middle">
                      <Item.Header className="dashboard-header">
                        Karma i Akcesoria
                      </Item.Header>
                    </Item.Content>
                  </Item>
                </Card.Content>
              </Card>
            </Link>
            <div className="graph">
              <Item.Header className="dashboard-graph-header">
                Popularność Ras
              </Item.Header>
              <GraphOne />
            </div>
            <div className="graph">
              <Item.Header className="dashboard-graph-header">
                Popularność Strony
              </Item.Header>
              <GraphTwo />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
