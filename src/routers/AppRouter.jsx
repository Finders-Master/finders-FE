import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Login from '../containers/Login/Login';
import Register from '../containers/Login/Register';
import DashBoard from './DashBoard';

const AppRouter = () => (
  <Router>
    <div className="router-container">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Register} />
        <Route path="/" component={DashBoard} />
      </Switch>
    </div>
  </Router>
);
export default AppRouter;
