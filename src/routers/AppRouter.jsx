import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../containers/Login/Login';
import Register from '../containers/Login/Register';
import NotFound from '../containers/NotFound/NotFound';
import DashBoard from './DashBoard';
import AngelInfo from '../containers/angel/Angel';
import Notifications from '../containers/Notifications/Notifications';
import RestartPassword from '../containers/Restart/Restart';
import ProfileAndChangeInfo from '../containers/ProfileAndChangeInfo/ProfileAndChangeInfo';

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
