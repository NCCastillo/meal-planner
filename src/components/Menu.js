import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import moment from 'moment';
import MenuItems from './MenuItems';

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }

  handleClick = () => {
    const { active } = this.state;
    
    if(active){
      this.setState({active: false})
    } else {
      this.setState({active: true})
    }
  }
  
  formatWeekOf(weekOf) {
    const weekOfRange = weekOf.split("_");
    const firstDate = weekOfRange[0]
    const secondDate = weekOfRange[1]
    
    return `${moment(firstDate).format('ddd, MMM DD YYYY')} to ${moment(secondDate).format('ddd, MMM DD YYYY')}`;
  }

  // filterMenuItemsByDay(items, day) {
  //   return items.filter((item) => item.day === day);
  // }

  render() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const { currentMenu } = this.props;
    const menuItems = currentMenu.menu_items;
    // console.log(menuItems);
    // {id: 3, week_of: "2017-02-19_2017-02-25", menu_items: Array[8]}
    // menu_items: [{day: "sunday", id: 9, meal: {id: 1, name: "Jerk Chicken", direction: "stuf here"}, menu_option: "meal one"}]

    return (
      <div className="columns">
        <div className="column col-8">
          <div id="menu-wrapper">
            <h2>
              {currentMenu.week_of ? this.formatWeekOf(currentMenu.week_of) : ''}
            </h2>
            <Tabs>
              <TabList>
                {days.map ((day, index) => <Tab key={index}>{day}</Tab>)}
              </TabList>
              <TabPanel>
                { 
                  // refactor menuItems maybe do the following
                  // days.map ((day, index) => <MenuList menuItems= >)
                  // menuItems.filter((menuItem, day) => menuItem.day.toLowerCase() === day.toLowerCase())
                  //menuItems.filter(function(f){return f.day === 'sunday'})
                }
                <MenuItems day='sunday' menuItems={menuItems.filter((menuItem) => menuItem.day.toLowerCase() === 'sunday')} />
                
              </TabPanel>
              <TabPanel>
                <MenuItems day='sunday' menuItems={menuItems.filter((menuItem) => menuItem.day.toLowerCase() === 'monday')} />
              </TabPanel>
              <TabPanel>
                <MenuItems day='sunday' menuItems={menuItems.filter((menuItem) => menuItem.day.toLowerCase() === 'tuesday')} />
              </TabPanel>
              <TabPanel>
                <MenuItems day='sunday' menuItems={menuItems.filter((menuItem) => menuItem.day.toLowerCase() === 'wednesday')} />
              </TabPanel>
              <TabPanel>
                <MenuItems day='sunday' menuItems={menuItems.filter((menuItem) => menuItem.day.toLowerCase() === 'thursday')} />
              </TabPanel>
              <TabPanel>
                <MenuItems day='sunday' menuItems={menuItems.filter((menuItem) => menuItem.day.toLowerCase() === 'friday')} />
              </TabPanel>
              <TabPanel>
                <MenuItems day='sunday' menuItems={menuItems.filter((menuItem) => menuItem.day.toLowerCase() === 'saturday')} />
              </TabPanel>
            </Tabs>
          </div>
        </div>
        
        <div className="column col-4">
          <div id="menu-canvas" className={this.state.active ? "show-nav" : ""}>
            {
              this.state.active ? (
                <a href="#" className="toggle-menu-nav float-right" onClick={this.handleClick}><i className="fa fa-times fa-2x" aria-hidden="true"></i></a>
              ) : (
                <a href="#" className="toggle-menu-nav float-right" onClick={this.handleClick}><i className="fa fa-bars fa-3x" aria-hidden="true"></i></a>
              )
            }
            <div id="menu-nav">
              <div className="input-group">
                <input type="text" className="form-input" placeholder="search meals" />
                <button className="btn btn-primary input-group-btn">Search</button>
              </div>

              <form>
                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <ul>
                    <li>
                      <label className="form-checkbox">
                        <input type="checkbox" name="gender" value="male"/>
                        <i className="form-icon"></i> Male
                      </label>    
                    </li>
                    <li>
                      <label className="form-checkbox">
                        <input type="checkbox" name="gender" value="female"/>
                        <i className="form-icon"></i> Female
                      </label>
                    </li>
                    <li>
                      <label className="form-checkbox">
                        <input type="checkbox" name="gender" value="female"/>
                        <i className="form-icon"></i> Female
                      </label>
                    </li>
                    <li>
                      <label className="form-checkbox">
                        <input type="checkbox" name="gender" value="female"/>
                        <i className="form-icon"></i> Female
                      </label>
                    </li>
                    <li>
                      <label className="form-checkbox">
                        <input type="checkbox" name="gender" value="female"/>
                        <i className="form-icon"></i> Female
                      </label>
                    </li>
                    <li>
                      <label className="form-checkbox">
                        <input type="checkbox" name="gender" value="female"/>
                        <i className="form-icon"></i> Female
                      </label>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;
