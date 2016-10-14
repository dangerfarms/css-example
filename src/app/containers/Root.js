import React from 'react';
import {Provider} from 'react-redux';

import {LoginScreen} from '../../authentication/containers';
import {createStore} from '../../store';

export default function Root() {
    return <Provider store={createStore()}>
        <LoginScreen></LoginScreen>
    </Provider>;
}
