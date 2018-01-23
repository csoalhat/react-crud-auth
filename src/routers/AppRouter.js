import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Dashboard from './../components/Dashboard';
import Add from './../components/Add';
import Edit from './../components/Edit';
import Help from './../components/Help';
import NotFound from './../components/NotFound';
import Header from './../components/Header';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route exact={true} path="/" component={Dashboard} />
            <Route path="/Create" component={Add} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/help" component={Help} />
            <Route component={NotFound} />
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;