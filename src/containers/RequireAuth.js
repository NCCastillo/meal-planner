import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getCurrentMenu } from '../actions/CreateMenuActionCreators';

export default function(WrappedComponent) {
  class Auth extends Component {
    componentDidMount() {
      const { dispatch, authenticated } = this.props;

      if (authenticated) {
        dispatch(getCurrentMenu());
      }
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        // replace({nextPathname: nextState.location.pathname }, '/sign_in')
        // need to store current path so that it can be redirected back to orignal route
        //let redirectAfterLogin = this.props.location.pathname;
        // browserHistory.push(`/sign_in?next=${redirectAfterLogin}`);
        browserHistory.push('/sign_in');
      }
    }

    render() {
      return <WrappedComponent {...this.props } />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.session.authenticated
    }
  }

  return connect(mapStateToProps, null)(Auth);
}
