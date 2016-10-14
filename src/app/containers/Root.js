import React from 'react';
import {Provider} from 'react-redux';
import {browserHistory, Route, Router} from 'react-router';

import {LoginScreen} from '../../authentication/containers';
import {DashboardScreen} from '../../dashboard/components';
import {createStore} from '../../store';

export default function Root() {
    return <Provider store={createStore()}>
        <Router history={browserHistory}>
            <Route path='/' component={LoginScreen} />
            <Route path='/dashboard' component={DashboardScreen} />
        </Router>
    </Provider>;
}
