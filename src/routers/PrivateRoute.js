import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const orange = 'orange';
export const PrivateRoute = ({
    isAuthenticated, 
    component: Component, //passing component in on AppRouter page, need to capitalize 
    ...rest //Passes other props such as path
}) => (
    <Route {...rest} component={(props) => (
       
            isAuthenticated ? (
                <Component {...props} />
                
            ) : (
                <Redirect to="/admin-login" />
            )
       
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps)(PrivateRoute);

