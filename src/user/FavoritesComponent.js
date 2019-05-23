import React from "react";
import { Label, Icon } from "semantic-ui-react";

const Favorites = props => {
  return (
    <div>
      {props.userFavArray
        ? props.userFavArray.map(userFavId => (
            <Label key={userFavId}>
              {props.dataArray
                .filter(data => data.id === userFavId)
                .map(element => element.name)}
              <Icon
                name="delete"
                onClick={() => props.onDelete(userFavId, props.userFavArrayName)}
              />
            </Label>
          ))
        : null}
    </div>
  );
};

export default Favorites;
