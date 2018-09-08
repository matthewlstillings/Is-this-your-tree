import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router';
import createHistory from 'history/createBrowserHistory'; 
import HeaderContainer from '../components/HeaderContainer';
import DashboardPage from '../components/Dashboard';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/404page';
import { AddTreePage } from '../components/Admin/AddTreePage';
import CreateAdmin from '../components/Admin/CreateAdmin';
import AdminPage from '../components/Admin/AdminPage';
import PublicRoute from './PublicRoute';
import AdminLogin from '../components/Admin/AdminLogin';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <HeaderContainer />
            <Switch>
                <Route 
                    path="/"
                    component={DashboardPage}
                    exact={true}
                />
                <PublicRoute 
                    path="/admin-login"
                    component={AdminLogin}
                />
                
                <PrivateRoute
                    path="/add-tree"
                    component={AddTreePage}
                />
                <Route
                    path="/help"
                    component={HelpPage}
                />
                <PrivateRoute
                    path="/new-admin"
                    component={CreateAdmin}
                />
                <PrivateRoute
                    path="/admin"
                    component={AdminPage}
                />
                <Route 
                    component={NotFoundPage}
                />
                
            </Switch>
        </div>     
    </Router>
);

export default AppRouter;