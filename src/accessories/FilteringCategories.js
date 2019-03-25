import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import "./Accessories.css"

class FilteringCategories extends Component {
  

  render() {
    // console.log(this.props)
    // const filterCategories = this.props.categories.reduce((acc, category) => ({ 
    //       key: category,
    //       text: category,
    //       value: category,
    //     }), {}
    // );
    const filterCategories = this.props.categories.map(category => ({
      key: category,
      text: category,
      value: category,
    }))
    console.log(filterCategories)


  
      
    return (
      <div>
        <Dropdown clearable options={filterCategories} selection placeholder='Filtruj'/>
      </div>
    )
  }
}

export default FilteringCategories;