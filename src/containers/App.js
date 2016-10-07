import React from 'react';
import {Provider} from 'react-redux';

import LoginScreen from '../authentication/containers/LoginScreen';
import {createStore} from '../store';

export default function App() {
    return <Provider store={createStore()}>
        <LoginScreen></LoginScreen>
    </Provider>;
}
