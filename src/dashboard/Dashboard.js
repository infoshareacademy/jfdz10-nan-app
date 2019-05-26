import React, { Component, Fragment } from "react";
import { Card, Image, Item, Segment, Button } from "semantic-ui-react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import GraphOne from "../graph/GraphOne";
import GraphTwo from "../graph/GraphTwo";
import "../accessories/Accessories.css"

import userActions from "../Redux/actions/userActions";
import { connect } from "react-redux";

class Dashboard extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <Fragment>
        <div className="dashboard-container">
          <div className="dashboard-card-box">
            {this.props.routes.map(link => (
              <Link to={`/logged/${link.id}`} key={`/${link.id}`}>
                <Card className="dashboard-grid-content">
                  <Image src={link.img} className="image-background" />
                  <Card.Content>
                    <Item>
                      <Item.Content verticalAlign="middle">
                        <Item.Header className="dashboard-header">
                          {link.label}
                        </Item.Header>
                      </Item.Content>
                    </Item>
                  </Card.Content>
                </Card>
              </Link>
            ))}
            <Segment textAlign='center'size="large">
              <h2>Szukasz dla siebie wymarzonego kota, ale wciąż nie wiesz jaką rasę wybrać?</h2>
              <p>Odpowiedz nam na kilka pytań, a my dobierzemy najwłaściwszą dla Ciebie rasę.</p>
              <Link to="/logged/profile/cat-preferences"><Button className="blue-button">Dobierz kota</Button></Link>
            </Segment >
            <div>
              <Item.Header className="dashboard-graph-header">
                Wielkość kategorii
              </Item.Header>
              <GraphOne />
            </div>
            <div>
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

const mapStateToProps = state => ({
  routes: state.data.routes
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
