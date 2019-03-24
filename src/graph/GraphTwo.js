import React, { Component} from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line
} from "recharts";

class GraphTwo extends Component {

  state = {
    graphTwoData: [
      { name: "Paź", value: 2 },
      { name: "Lis", value: 4 },
      { name: "Gru", value: 10 },
      { name: "Sty", value: 6 },
      { name: "Lut", value: 15 },
      { name: "Mar", value: 9 },
    ]
  }
  
  render() {
    return (
      <LineChart width={400} height={250} data={this.state.graphTwoData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" fill="#1BD3E8" />
      </LineChart>
    );
  }
}

export default GraphTwo;
