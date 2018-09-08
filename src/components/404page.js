import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const NotFoundPage = () => (
    <div className="not-found">
        <h1 className="not-found-title">Page not found, please return to the home page.</h1>
        <Link className="not-found-link" to='/'>Go home</Link>
    </div>
);

export default NotFoundPage;