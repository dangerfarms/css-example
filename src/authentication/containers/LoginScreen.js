import {connect} from 'react-redux';

import {login} from '../../store/authentication/actions';
import {LoginScreen} from '../components';

function mapDispatchToProps(dispatch) {
    return {
        onLogin: function onLogin() {
            return dispatch(login());
        }
    };
}

export default connect(null, mapDispatchToProps)(LoginScreen);
