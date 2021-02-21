import React from 'react'
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Layout } from '../components/Layout/Layout';
import { Home } from '../containers/Home/Home';

export const DashBoard = () => {
    return (
        <div>
        <Layout>
            <Switch>
                <div>
                    <Route exact path="/" component={Home}/>
                </div>
            </Switch>
        </Layout>
        </div>
    )
}
