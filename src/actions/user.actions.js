import {userService} from '../services'
import {userConstants} from '../constants'
import history from '../helpers/history'
export const userActions = {
    login
}

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));
        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}