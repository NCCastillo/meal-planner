import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div>
        <ul className="tab tab-block">
          <li className="tab-item active">
            <a href="#">Music</a>
          </li>
          <li className="tab-item">
            <a href="#" >Playlists</a>
          </li>
          <li className="tab-item">
            <a href="#">Radio</a>
          </li>
          <li className="tab-item">
            <a href="#">Connect</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu;
