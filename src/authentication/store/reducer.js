import * as authenticationActions from './actions';

const initialState = {};

export default function authenticationReducer(state = initialState, action) {
    switch (action.type) {
        case authenticationActions.LOGIN_INIT:
            console.log('Login pending');
            return {pending: true};
        case authenticationActions.LOGIN_SUCCESS:
            console.log('Login success!');
            return {token: action.token};
        default:
            return state;
    }
}
