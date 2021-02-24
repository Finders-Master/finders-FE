import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from '../containers/Home/Home';
import { Login } from '../containers/Login/Login';
import { Register } from '../containers/Login/Register';
import { NotFound } from '../containers/NotFound/NotFound';
import { DashBoard } from './DashBoard';


export const AppRouter = () => {
    return (
        <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/registro" component={Register}/>
                    <Route exact path="/" component={Home}/>
                    <Route component={NotFound} />
                </Switch>
        </Router>
    )
}
