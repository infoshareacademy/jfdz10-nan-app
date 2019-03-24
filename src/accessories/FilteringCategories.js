import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import "./Accessories.css"

class FilteringCategories extends Component {
  state = { activeItem: 'Wszystkie' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary className="filtering__categories">
          <Menu.Item name='Wszystkie' 
            active={activeItem === 'Wszystkie'} 
            onClick={this.handleItemClick} 
          />
          <Menu.Item
            name='Karma'
            active={activeItem === 'Karma'}
            onClick={this.handleItemClick}
          />
          <Menu.Item name='Akcesoria' 
            active={activeItem === 'Akcesoria'} 
            onClick={this.handleItemClick} 
          />
          
        </Menu>
      </div>
    )
  }
}

export default FilteringCategories