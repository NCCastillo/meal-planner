import React, { Component } from 'react';
import MenuItem from './MenuItem';
import '../css/menu.css';

class MenuItems extends Component {
  render() {
    const { day, menuItems } = this.props;
    
    return (
      <ul className='menu-list'>
        {menuItems.map((item) => <MenuItem key={item.id} item={item} />)}
      </ul>
    )
  }
}

export default MenuItems;
