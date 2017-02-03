import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon, Dropdown } from 'semantic-ui-react'

const NavBar = () => (
  <Menu attached='top'>
    <Dropdown item icon='wrench' simple />
  </Menu>
)

export default NavBar;
