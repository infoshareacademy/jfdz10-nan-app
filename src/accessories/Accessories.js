import React, {Component} from 'react'

class Accessories extends Component {
    
    state = {
        accessories: []
      }
    
             
    componentDidMount(){
        fetch('/feed-and-accessories.json')
          .then(response => response.json())
          .then(data => {
              this.setState({
                accessories: data
              })
          })
    }
    
    render() {
         return  (
           <React.Fragment>
              <h1>Hello Accessories</h1>
              {
                this.state.accessories.map(el => {
                  return <div>{el.name}</div>
                })
              }
          </React.Fragment>
        )
    }
}

export default Accessories;

