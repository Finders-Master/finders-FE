import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AngelInfo from '../components/angel-info/Index';
import Layout from '../components/Layout/Layout';
import Angel from '../containers/angel/Angel';
import Home from '../containers/Home/Home';
import { NotFound } from '../containers/NotFound/NotFound';

const DashBoard = () => (
  <>
    <Layout>
      <div className="router-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/angel" component={Angel} />
          <Route exact path="/error-404" component={NotFound} />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </Layout>
  </>
);
export default DashBoard;
