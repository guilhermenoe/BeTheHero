import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logon from './pages/Logon';
import Register from './pages/Register';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={logon} />
                <Route path='./register' component={Register} />
            </Switch>
        </BrowserRouter>
    )
}