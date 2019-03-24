import React, { Component} from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from "recharts";

class GraphOne extends Component {

  state = {
    graphOneData: [
      { name: "Rosyjski Niebieski", value: 5},
      { name: "Sfinks", value: 2},
      { name: "Pixie-Bob", value: 13}
    ]
  }
  
  render() {
    return (
      <BarChart width={400} height={250} data={this.state.graphOneData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#1BD3E8" />
      </BarChart>
    );
  }
}

export default GraphOne;
