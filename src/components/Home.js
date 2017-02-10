import React, { Component } from 'react';
import BlankSlate from './BlankSlate';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import '../css/blankSlate.css';
import 'react-datepicker/dist/react-datepicker.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().startOf('week'),
      endDate: moment().endOf('week')
    }
  }

  handleChangeStart = (date) => {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd = (date) => {
    this.setState({
      endDate: date
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const { startDate, endDate } = this.state;

    console.log(startDate.format());
    console.log(endDate.format());
    // dispatch(postMenu({startDate, endDate}));  
  }

  render() {
    return (
      <BlankSlate 
        iconName='fa fa-calendar fa-3x' 
        title="Hey there! Looks like you don't have any menus as yet."
        meta='Select your first week.'>
        <form onSubmit={this.handleSubmit}>
          <DatePicker
            selected={this.state.startDate}
            selectsStart  startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart} />
          <DatePicker
            selected={this.state.endDate}
            selectsEnd  startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd} />
          <button type="submit" className="btn btn-primary btn-sm">Start</button>
        </form>
        
      </BlankSlate>
    )
  }
}

export default Home;
