import React, { Component, Fragment } from "react";
import "./Cats.css";


class Cats extends Component {
  state = {
    breeds: []
  };

  componentDidMount() {
    fetch("/breeds.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          breeds: data
        });
      });
  }

  render() {
    document.body.style.background = "#ff0  ";
    return (
      <Fragment>
        <h1 className="title">Breeds of Cats</h1>
        <div className="cat_boxes">
          {this.state.breeds.map(el => {
            console.log(el.image)
            return (
              <div className="cats" key={el.id}>
          
                <p
                  className="cat_img"
                  style={
                    { 
                      backgroundImage: `url(${el.image})`
                    }
                  }
                />
                <p className="cat_names">{el.breed}</p>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Cats;