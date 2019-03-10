import React, { Component, Fragment } from "react";
import './Cats.css';
import { Image } from 'semantic-ui-react'

class Cats extends Component {
  state = {
    breeds: []
  }

  componentDidMount(){
    fetch('/breeds.json')
      .then(response => response.json())
      .then(data => {
          this.setState({
            breeds: data
          })
      })
  }

    render() {
     return  (
       <Fragment>
          <h1>Breeds of Cats</h1>
          <div className="cat_boxes" >
          {
            this.state.breeds.map(el => {
              return <div className="cats" key={el.id}>
              <img className="images" alt={el.breed} src={el.image}/>
              <p className="cat_img" background='${url({el.image})}'></p>
              <p className="cat_names">{el.breed}</p>
              </div>
            })
          }
          </div>
      </Fragment>
  )
}
}

export default Cats

