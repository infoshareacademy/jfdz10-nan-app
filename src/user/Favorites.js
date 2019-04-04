import React from "react";
import { Label, Icon } from "semantic-ui-react";

const Favorites = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      {props.parameter.map(favorite => (
        <Label>
          {favorite}
          <Icon name="delete" />
        </Label>
      ))}
    </div>
  );
};

export default Favorites;
