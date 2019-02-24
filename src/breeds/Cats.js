import React, { Component, Fragment } from "react";
import './Cats.css';

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
          {
            this.state.breeds.map(el => {
              return <div key={el.id}>
              <p>{el.breed}</p>
              <p>{el.description}</p>
              </div>
            })
          }
      </Fragment>
  )
}
}

export default Cats