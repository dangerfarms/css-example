import {assert} from 'chai';

import * as authenticationActions from './actions';
import reducer from './reducer';

describe('Authentication reducer', () => {
    it('should initialise state as an empty object', () => {
            const initialState = reducer(undefined, {});
            assert.deepEqual(initialState, {});
    });

    describe(`On ${authenticationActions.LOGIN_INIT} action`, () => {
        it('should track the pending request', () => {
            const state = {};
            const nextState = reducer(state, authenticationActions.loginInit());
            assert.deepEqual(nextState, {pending: true});
        });
    });

    describe(`On ${authenticationActions.LOGIN_SUCCESS} action`, () => {
        it('should clear the pending request', () => {
            const state = {pending: true};
            const nextState = reducer(state, authenticationActions.loginSuccess());
            assert.equal(nextState.pending, undefined);
        });

        it('should store the token', () => {
            const state = {pending: true};
            const nextState = reducer(state, authenticationActions.loginSuccess('fakeToken'));
            assert.deepEqual(nextState, {token: 'fakeToken'});
        });
    });

});
