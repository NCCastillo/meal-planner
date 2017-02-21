import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    const { item } = this.props;
    const menuOption = item.menu_option;
    const mealName = item.meal.name;
    
    return (
      <li>
        <div className="menu-card">
          <div className="menu-option">
            <span className="label label-success">
              <i className="fa fa-tag" aria-hidden="true"><span className="menu-option-title">{menuOption}</span></i>
            </span>
          </div>
          <div className="meal-name">
            {mealName}
          </div>
        </div>
      </li>
    )
  }
}

export default MenuItem;
