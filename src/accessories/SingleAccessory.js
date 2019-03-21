import React, { Component } from "react";
import Accessories from "./Accessories.js"
import { Button, Image, Card } from "semantic-ui-react";


class SingleAccessory extends Accessories {
  state = {
    accessories: []
  };

  render() {
    return (
      <React.Fragment>
        <h1>Accessories</h1>
        <div>
           
        </div>
        </React.Fragment>
    )
  }

}

export default SingleAccessory;
