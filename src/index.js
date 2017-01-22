import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// const router = (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={App}>
//         <Route component={Authenticated}>
//           <IndexRoute component={Home}></IndexRoute>
//           <Route path='/sign_in' component={Session}></Route>
//           <Route path='/sign_up' component={Registration}></Route>
//         </Route>    
//       </Route>
//     </Router>
//   </Provider>
// )

//<Provider store={store}>
//  <Router history={browserHistory>
//    <Route path="/" component={App}>
//      <Route path='/sign_in' component={Session} />
//      <Route path='/sign_up' component={Registration} />
//      <Route path="about" component={About} />
//      
//
//      <Route component={Dashboard} onEnter={requireAuth} >
//      OR
//      <Route component={requireAuth(Dashboard)} >
//        <IndexRoute component={Home} />
//        <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
//      </Route>
//    </Route>
//  </Router>
//</Provider>

// <Route component={MainLayout}>
  // <Route path="/sign_up" component={RegistrationsNew} />
  // <Route path="/sign_in" component={SessionsNew} />

  // <Route path="/" component={AuthenticatedContainer} onEnter={_ensureAuthenticated}>
    // <IndexRoute component={HomeIndexView} />

    // <Route path="/boards/:id" component={BoardsShowView}>
      // <Route path="cards/:id" component={CardsShowView}/>
    // </Route>
  // </Route>
// </Route>
// );
