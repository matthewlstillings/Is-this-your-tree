import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'; 
import Header from '../components/header';
import DashboardPage from '../components/Dashboard';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/404page';
import { AddTreePage } from '../components/AddTreePage';

//import PublicRoute from './PublicRoute';
//import LogIn from '../components/Log-in';
//import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route 
                    path="/"
                    component={DashboardPage}
                    exact={true}
                />
                <Route
                    path="/add-tree"
                    component={AddTreePage}
                />
                <Route
                    path="/help"
                    component={HelpPage}
                />
                <Route
                    component={NotFoundPage}
                />
            </Switch>
        </div>     
    </Router>
);

export default AppRouter;