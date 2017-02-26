import React, { Component } from 'react';
import { connect } from 'react-redux';
import createMenu from '../actions/CreateMenuActionCreators';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Menu from './Menu';
import BlankSlate from './BlankSlate';


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
    
    const { dispatch } = this.props;
    const { startDate, endDate } = this.state;
    const formData = {
      weekOf: `${startDate.format('YYYY-MM-DD')}_${endDate.format('YYYY-MM-DD')}`
    }
    
    dispatch(createMenu(formData));  
  }

  render() {
    const { errors, loading, currentMenu } = this.props;

    return (
      <div className="container">
        <div className="columns">
          <div className="column col-12">
            { errors.length > 0  && 
              <div className="toast toast-danger">
                <button className="btn btn-clear float-right"></button>
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                { errors.map((error, i) => <li key={i}>{error}</li>) }
              </div>
            }
          </div>
        </div>
        {
          Object.keys(currentMenu).length !== 0 ? (<Menu {...this.props} />) : (
            <div className="columns">
              <div className="column col-6">
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
                      <button type="submit" className={`btn btn-primary btn-sm ${loading ? 'loading' : ''}`}>Start</button>
                    </form>
                </BlankSlate>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.menu.errors,
    loading: state.menu.isFetching,
    currentMenu: state.menu.currentMenu
  }
}
export default connect(mapStateToProps)(Home);
