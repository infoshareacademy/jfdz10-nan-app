import React, { Component} from "react";
import {
  PieChart,
  Tooltip,
  Pie
} from "recharts";

import userActions from "../Redux/actions/userActions";
import { connect } from "react-redux";

class GraphOne extends Component {
  
  render() {
    const breeds = this.props.breeds.length
    const breeders = this.props.breeders.length
    const accessories = this.props.accessories.length
    const graphOneData = [
      { name: "Rasy kotów", value: breeds},
      { name: "Hodowcy", value: breeders},
      { name: "Karmy i Akcesoria", value: accessories}
    ]
    return (
      <PieChart width={400} height={250}>
        <Tooltip />
        <Pie  data={graphOneData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#1BD3E8" />
      </PieChart>
    );
  }
}

const mapStateToProps = state => ({
  breeds: state.data.breeds,
  breeders: state.data.breeders,
  accessories: state.data.accessories
});

const mapDispatchToProps = userActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphOne);
