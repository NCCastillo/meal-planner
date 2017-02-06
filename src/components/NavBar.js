import React from 'react';
import { Link } from 'react-router';
import '../css/header.css';

const NavBar = () => (
  <nav className="navbar" id="meal-planner-header">
    <div className="container">
      <div className="navbar-section">
        <Link to='/' className="navbar-brand">
          <h3><i className="fa fa-asterisk" aria-hidden="true"></i>YUM<i className="fa fa-exclamation" aria-hidden="true"></i></h3>
        </Link>
      </div>
    </div>
  </nav>
)

export default NavBar;
