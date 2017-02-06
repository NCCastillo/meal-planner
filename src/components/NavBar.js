import React from 'react';
import { Link } from 'react-router';
import '../css/header.css';

const NavBar = () => (
  <nav className="navbar" id="meal-planner-header">
    <div className="container">
      <div className="navbar-section">
        <Link to='/' className="navbar-brand">
          <i className="fa fa-cogs" aria-hidden="true"></i>Meal Planner
        </Link>
      </div>
    </div>
  </nav>
)

export default NavBar;
