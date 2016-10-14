import * as api from '../../api';

export const LOGIN_INIT = 'LOGIN_INIT';
export function loginInit() {
    return {
        type: LOGIN_INIT
    };
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        token: token
    };
}


/* Thunks */

export function login(email, password) {

    // Not sure of the best name for this function
    return function loginThunk(dispatch) {
        dispatch(loginInit());

        return api.login(email, password)
            .then((data) => dispatch(loginSuccess(data.token)));
    };

}
