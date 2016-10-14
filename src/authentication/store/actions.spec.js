import {assert} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';

import * as api from '../../api';
import * as authenticationActions from './actions';

const mockStore = configureMockStore([thunk]);

describe('Authentication thunks', () => {
    describe('login() async action', () => {
        it('should dispatch correct actions for successful login', () => {
            const fakeToken = '234nfds';

            let loginStub = sinon.stub(api, 'login', () => Promise.resolve({token: fakeToken}));

            const store = mockStore({});
            return store.dispatch(authenticationActions.login())
                .then(() => {
                    assert.deepEqual(store.getActions(), [
                        authenticationActions.loginInit(),
                        authenticationActions.loginSuccess(fakeToken)
                    ]);

                    loginStub.restore();
                });
        });
    });
});
