import React, { Component, Fragment, Segment } from "react";
import { Card, Image, Item, Container } from "semantic-ui-react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

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
            <Card id="profile" className="dashboard-grid-content">
              <Image src="http://www.nan.jfdz10.is-academy.pl/icons/love.svg" />
              <Card.Content>
                <Item>
                  <Item.Content verticalAlign="middle">
                    <Item.Header className="header">
                      <Link to="/profile">Profil</Link>
                    </Item.Header>
                  </Item.Content>
                </Item>
              </Card.Content>
            </Card>
            <Card id="cats" className="dashboard-grid-content">
              <Image src="http://www.nan.jfdz10.is-academy.pl/icons/magnifying-glass.svg" />
              <Card.Content>
                <Item>
                  <Item.Content verticalAlign="middle">
                    <Item.Header className="header">
                      <Link to="/cats">Koty</Link>
                    </Item.Header>
                  </Item.Content>
                </Item>
              </Card.Content>
            </Card>
            <Card id="breeders" className="dashboard-grid-content">
              <Image src="http://www.nan.jfdz10.is-academy.pl/icons/volunteer.svg" />
              <Card.Content>
                <Item>
                  <Item.Content verticalAlign="middle">
                    <Item.Header className="header">
                      <Link to="/breeders">Hodowcy</Link>
                    </Item.Header>
                  </Item.Content>
                </Item>
              </Card.Content>
            </Card>
            <Card id="food-and-accessories" className="dashboard-grid-content">
              <Image src="http://www.nan.jfdz10.is-academy.pl/icons/pet-food.svg" />
              <Card.Content>
                <Item>
                  <Item.Content verticalAlign="middle">
                    <Item.Header className="header">
                      <Link to="/profile">Karma i Akcesoria</Link>
                    </Item.Header>
                  </Item.Content>
                </Item>
              </Card.Content>
            </Card>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
