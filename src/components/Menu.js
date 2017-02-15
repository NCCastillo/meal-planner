import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Menu extends Component {
  render() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return (
      <Tabs>
        <TabList>
          {days.map ((day, index) => <Tab key={index}>{day}</Tab>)}
        </TabList>
        <TabPanel>
          <h2>Sunday Meal List</h2>
        </TabPanel>
        <TabPanel>
          <h2>Monday</h2>
        </TabPanel>
        <TabPanel>
          <h2>Tuesday</h2>
        </TabPanel>
        <TabPanel>
          <h2>Wednesday</h2>
        </TabPanel>
        <TabPanel>
          <h2>Thursday</h2>
        </TabPanel>
        <TabPanel>
          <h2>Friday</h2>
        </TabPanel>
        <TabPanel>
          <h2>Saturday</h2>
        </TabPanel>
      </Tabs>
    )
  }
}

export default Menu;
