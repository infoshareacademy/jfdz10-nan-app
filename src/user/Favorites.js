import React from "react";
import { Label, Icon } from "semantic-ui-react";

const Favorites = props => {
  return (
    <div>
      <h3 style={{ marginTop: "20px" }}>{props.name}</h3>
      {props.parameter.map(favorite => (
        <Label key={favorite}>
          {props.labels
            .filter(label => label.id === favorite)
            .map(element => element.name)}
          <Icon name="delete" onClick={() => props.onDelete(favorite, props.favKey)} />
        </Label>
      ))}
    </div>
  );
};

export default Favorites;
