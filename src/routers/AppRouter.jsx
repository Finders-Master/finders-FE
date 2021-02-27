import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from '../containers/Login/Login';
import { Register } from '../containers/Login/Register';
import { NotFound } from '../containers/NotFound/NotFound';
import { DashBoard } from './DashBoard';
import AngelInfo from '../containers/angel/Angel';
import Notifications from '../containers/Notifications/Notifications';
import RestartPassword from '../containers/Restart/Restart';
import ProfileAndChangeInfo from '../containers/ProfileAndChangeInfo/ProfileAndChangeInfo';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/alerta" component={Notifications} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={ProfileAndChangeInfo} />
        <Route exact path="/registro" component={Register} />
        <Route path="/angel" component={AngelInfo} />
        <Route path="/restart" component={RestartPassword} />
        <Route path="/" component={DashBoard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
