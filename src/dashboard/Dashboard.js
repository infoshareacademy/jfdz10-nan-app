import React, { Component, Fragment } from "react";
import { Card, Image, Item } from "semantic-ui-react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import GraphOne from "../graph/GraphOne";
import GraphTwo from "../graph/GraphTwo";

import dataActions from "../Redux/actions/dataActions";
import { connect } from "react-redux";

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchData("routes", "routes")
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

const mapStateToProps = state => ({
  routes: state.data.routes
});

const mapDispatchToProps = dataActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
