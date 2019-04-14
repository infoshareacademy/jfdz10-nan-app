import React, { Component, Fragment } from "react";
import { Card, Image, Item } from "semantic-ui-react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import GraphOne from '../graph/GraphOne'
import GraphTwo from '../graph/GraphTwo'


class Dashboard extends Component {
  state = {
    elements: []
  };

  componentDidMount() {
    fetch("https://jfdz10nan-app.firebaseio.com/routes.json")
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
            <Card id="profile" className="dashboard-grid-content">
              <Image src="http://www.nan.jfdz10.is-academy.pl/icons/love.svg" className="image-background" />
              <Card.Content>
                <Item>
                  <Item.Content verticalAlign="middle">
                    <Link to="/profile">
                      <Item.Header className="dashboard-header">Profil</Item.Header>
                    </Link>
                  </Item.Content>
                </Item>
              </Card.Content>
            </Card>
            <Card id="cats" className="dashboard-grid-content">
              <Image src="http://www.nan.jfdz10.is-academy.pl/icons/magnifying-glass.svg" className="image-background" />
              <Card.Content>
                <Item>
                  <Item.Content verticalAlign="middle">
                    <Link to="/cats">
                      <Item.Header className="dashboard-header">Koty</Item.Header>
                    </Link>
                  </Item.Content>
                </Item>
              </Card.Content>
            </Card>
            <Card id="breeders" className="dashboard-grid-content">
              <Image src="http://www.nan.jfdz10.is-academy.pl/icons/volunteer.svg" className="image-background" />
              <Card.Content>
                <Item>
                  <Item.Content verticalAlign="middle">
                    <Link to="/breeders">
                      <Item.Header className="dashboard-header">Hodowcy</Item.Header>
                    </Link>
                  </Item.Content>
                </Item>
              </Card.Content>
            </Card>
            <Card id="food-and-accessories" className="dashboard-grid-content">
              <Image src="http://www.nan.jfdz10.is-academy.pl/icons/pet-food.svg" className="image-background" />
              <Card.Content>
                <Item>
                  <Item.Content verticalAlign="middle">
                    <Link to="/food-and-accessories">
                      <Item.Header className="dashboard-header">
                        Karma i Akcesoria
                      </Item.Header>
                    </Link>
                  </Item.Content>
                </Item>
              </Card.Content>
            </Card>
            <div>
              <Item.Header className="dashboard-graph-header">Popularność Ras</Item.Header><GraphOne />
            </div>
            <div>
              <Item.Header className="dashboard-graph-header">Popularność Strony</Item.Header><GraphTwo />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
