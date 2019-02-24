import React, { Component, Fragment } from "react";

class Breeders extends Component {
  state = {
    breeders: []
  }

  componentDidMount() {
        fetch('/breeders.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                breeders: data
            })
        })
    }

    render() {
     return  (
            <Fragment>
                <h1>Lista Hodowców</h1>
                {
                    this.state.breeders.map(el => {
                        return <div>{el.name}
                        <p>{el.img}</p>
                        <p>{el.description}</p>
                        </div>
                    })
                }
            </Fragment>
        )
    }
}

export default Breeders