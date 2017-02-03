import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon, Menu, Dropdown } from 'semantic-ui-react'


class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'dashboard' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled' vertical>
        <Menu.Item name='dashboard' as={Link} to='/' active={activeItem === 'dashboard'} onClick={this.handleItemClick}>
          <Icon name='dashboard' />
          Dashboard
        </Menu.Item>

        <Menu.Item name='calendar' as={Link} to='/protected' active={activeItem === 'calendar'} onClick={this.handleItemClick}>
          <Icon name='calendar' />
          Menus
        </Menu.Item>

        <Menu.Item name='food' as={Link} to='/protected' active={activeItem === 'food'} onClick={this.handleItemClick}>
          <Icon name='food' />
          Meals
        </Menu.Item>

        <Menu.Menu position='right'>
          <Dropdown simple text='Account' className='item'>
            <Dropdown.Menu>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default SideBar;
