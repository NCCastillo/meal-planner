import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <Link to='/' className="navbar-brand">
          <img alt="Brand" src="..." />
        </Link>
      </div>
    </div>
  </nav>
)

export default NavBar;
