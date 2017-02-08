import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Menus from './components/Menus';
import Meals from './components/Meals';
import NewMenu from './components/NewMenu';
import 'spectre.css/dist/spectre.min.css';
import 'font-awesome/css/font-awesome.css';
import './css/main.css';

import store from './Store';
import Session from './components/Session';
import Registration from './components/Registration';
import AuthenticatedAppContainer from './containers/AuthenticatedAppContainer';
import requireAuth from './containers/RequireAuth';
import Protected from './components/Protected';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/sign_in' component={Session} />
        <Route path='/sign_up' component={Registration} />

        <Route component={requireAuth(AuthenticatedAppContainer)} >
          <IndexRoute component={Home} />
          <Route path='/menus' component={Menus} />
          <Route path='/menu/new' component={NewMenu} />
          <Route path='/meals' component={Meals} />
          <Route path='/protected' component={Protected} />
        </Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
