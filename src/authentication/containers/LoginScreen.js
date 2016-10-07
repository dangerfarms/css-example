import {connect} from 'react-redux';

import {login} from '../store/actions';
import LoginScreen from '../components/LoginScreen';

function mapDispatchToProps(dispatch) {
    return {
        onLogin: function onLogin() {
            return dispatch(login());
        }
    };
}

export default connect(null, mapDispatchToProps)(LoginScreen);
