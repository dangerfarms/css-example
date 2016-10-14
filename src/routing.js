import React from 'react';
import {browserHistory, Route, Router as ReactRouter} from 'react-router';

import {LoginScreen} from './authentication/containers';
import {DashboardScreen} from './dashboard/components';

export const urls = {
    DASHBOARD: '/dashboard',
    LOGIN: '/'
};

export function Router() {
    return <ReactRouter history={browserHistory}>
        <Route path={urls.DASHBOARD} component={DashboardScreen} />
        <Route path={urls.LOGIN} component={LoginScreen} />
    </ReactRouter>;
}
