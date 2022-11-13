import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';

const Routes = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" exact component={Home} />
        </Switch>
    );
};

export default Routes;
