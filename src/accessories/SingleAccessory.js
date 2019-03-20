import React, {Fragment} from "react";


import { Input } from "semantic-ui-react";


const SingleAccessory = props => {
    const { accessory } = props;

    return (
        <Fragment>
              <div className="accessories__container">
                <Input
                  className="input"
                  action="Search"
                  placeholder="Szukaj..."
                />
                <h1> {accessory.name} </h1>
                <ul>
                    <li>Producent: {accessory.producer}</li>
                    <li>Opis: {accessory.description}</li>
                    <li>Cena: {accessory.price} zł</li>


                </ul>
                
</div>
        </Fragment>
            )
       
    
};

export default SingleAccessory;
