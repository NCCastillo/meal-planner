import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MenuItems from './MenuItems';

class Menu extends Component {
  
  formatWeekOf(weekOf) {
    const weekOfRange = weekOf.split("_");
    const firstDate = weekOfRange[0]
    const secondDate = weekOfRange[1]

    return `${firstDate}/${secondDate}`;
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
      <div>
        <h1>
          Week Of {currentMenu.week_of ? this.formatWeekOf(currentMenu.week_of) : ''}
        </h1>
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
    )
  }
}

export default Menu;
