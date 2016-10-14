import React from 'react';
import {Provider} from 'react-redux';

import {Router} from './routing';
import {createStore} from './store';

export default function Root() {
    return <Provider store={createStore()}>
        <Router />
    </Provider>;
}
