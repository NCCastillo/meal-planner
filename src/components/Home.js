import React, { Component } from 'react';
import BlankSlate from './BlankSlate';
import { Link } from 'react-router';
import '../css/blankSlate.css';

class Home extends Component {
  render() {
    return (
      <BlankSlate 
        iconName='fa fa-calendar fa-3x' 
        title="Hey there! Looks like you don't have any menus as yet."
        meta='Select your first week.'>
        <Link to='menus/new' className="empty-action btn btn-primary"> 
          Start
        </Link>
      </BlankSlate>
    )
  }
}

export default Home;
