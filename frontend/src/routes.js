import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logon from './pages/Logon';
import register from './pages/Register';
import profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={logon} />
                <Route path='/register' component={register} />
                <Route path='/profile' component={profile} />
                <Route path='/incidents/new' component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}

