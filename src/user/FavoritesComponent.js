import React from "react";
import { Label, Icon } from "semantic-ui-react";

const Favorites = props => {
  return (
    <div>
      {props.userFavIds
        ? props.userFavIds.map(id => (
            <Label key={id}>
              {props.elementsArray
                .filter(element => element.id === id)
                .map(element => element.name)}
              <Icon
                name="delete"
                onClick={() => props.onDelete(id, Object.keys(props.userFavIds))}
              />
            </Label>
          ))
        : null}
    </div>
  );
};

export default Favorites;
