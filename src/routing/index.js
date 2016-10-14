import React from 'react';
import {browserHistory, Route, Router as ReactRouter} from 'react-router';

import {LoginScreen, MainContentContainer} from '../authentication/components';
import {DashboardScreen} from '../dashboard/components';
import {NotFoundScreen} from './components';

export const urls = {
    DASHBOARD: '/dashboard',
    LOGIN: '/login',
};

export function Router() {
    return <ReactRouter history={browserHistory}>
        <Route path={urls.DASHBOARD} component={DashboardScreen} />
        <Route component={MainContentContainer}>
            <Route path={urls.LOGIN} component={LoginScreen} />
        </Route>
        <Route path='*' component={NotFoundScreen} />
    </ReactRouter>;
}
