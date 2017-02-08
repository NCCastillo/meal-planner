import React, { Component } from 'react';
import BlankSlate from './BlankSlate';
import '../css/blankSlate.css';

class Home extends Component {
  render() {
    return (
      <BlankSlate 
        iconName='fa fa-calendar fa-3x' 
        title="Hey there! Looks like you don't have any menus as yet."
        meta='Click start to begin meal planning.'
        linkTo='/menu/new'
        linkToName='empty-action btn btn-primary'
      />
    )
  }
}

export default Home;
