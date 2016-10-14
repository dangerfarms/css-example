import {applyMiddleware, combineReducers, createStore as createReduxStore} from 'redux';
import thunk from 'redux-thunk';

import authenticationReducer from './authentication/reducer';

export default function createStore() {
    const reducer = combineReducers({
        authentication: authenticationReducer
    });

    return createReduxStore(reducer, applyMiddleware(thunk));
}
