import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Login } from '../containers/Login/Login';
import { Register } from '../containers/Login/Register';
import { NotFound } from '../containers/NotFound/NotFound';
import { DashBoard } from './DashBoard';
import AngelInfo from '../containers/angel/Angel';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/registro' component={Register} />
                <Route path='/' component={DashBoard} /> 
            </Switch>
        </div> 
    </Router>
  );
};
