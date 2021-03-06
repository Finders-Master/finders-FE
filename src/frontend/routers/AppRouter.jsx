import React, { lazy, Suspense } from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import LoadingFallback from '../components/common/Loading';

const Home = lazy(() => import('../containers/Home/Home'));
const Layout = lazy(() => import('../components/Layout/Layout'));
const AngelInfo = lazy(() => import('../components/angel-info/Index'));
const NotFound = lazy(() => import('../containers/NotFound/NotFound'));
const Notifications = lazy(() =>
  import('../containers/Notifications/Notifications'),
);
const ProfileAndChangeInfo = lazy(() =>
  import('../containers/ProfileAndChangeInfo/ProfileAndChangeInfo'),
);
const RestartPassword = lazy(() => import('../containers/Restart/Restart'));
const Login = lazy(() => import('../containers/Login/Login'));
const Register = lazy(() => import('../containers/Register/Register'));

const DashBoard = () => (
  <>
    <Suspense fallback={<LoadingFallback />}>
      <Router>
        <Layout>
          <div className="router-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/error-404" component={NotFound} />
              <Route exact path="/angel" component={AngelInfo} />
              <Route exact path="/alerta" component={Notifications} />
              <Route exact path="/profile" component={ProfileAndChangeInfo} />
              <Route exact path="/restart" component={RestartPassword} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/registro" component={Register} />
              <Redirect to="/error-404" />
            </Switch>
          </div>
        </Layout>
      </Router>
    </Suspense>
  </>
);

export default DashBoard;
