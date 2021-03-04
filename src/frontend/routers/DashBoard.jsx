import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AngelInfo from '../components/angel-info/Index';
import Layout from '../components/Layout/Layout';
import Home from '../containers/Home/Home';
import NotFound from '../containers/NotFound/NotFound';
import Notifications from '../containers/Notifications/Notifications';
import ProfileAndChangeInfo from '../containers/ProfileAndChangeInfo/ProfileAndChangeInfo';
import RestartPassword from '../containers/Restart/Restart';
const DashBoard = () => (
  <>
    <Layout>
      <div className="router-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/error-404" component={NotFound} />
          <Route exact path="/angel" component={AngelInfo} />
          <Route exact path="/alerta" component={Notifications} />
          <Route exact path="/profile" component={ProfileAndChangeInfo} />
          <Route exact path="/restart" component={RestartPassword} />
          <Redirect to="/error-404" />
        </Switch>
      </div>
    </Layout>
  </>
);
export default DashBoard;
