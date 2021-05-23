import { ACTION_AUTHENTICATION } from '../Actions';

export const actionLogin = (info) => {
    return {
        type: ACTION_AUTHENTICATION.LOGIN,
        payload: info
    };
};

export const actionSetloading = (state) => {
    return {
        type: ACTION_AUTHENTICATION.SET_LOADING,
        payload: state
    };
};

export const actionLoginSuccess = (userCredential) => {
    return {
        type: ACTION_AUTHENTICATION.LOGIN_SUCCESS,
        payload: userCredential
    };
};

export const actionLoginFail = (e) => {
    return {
        type: ACTION_AUTHENTICATION.LOGIN_FAIL,
        payload: e
    };
};

export const actionLogout = () => {
    return {
        type: ACTION_AUTHENTICATION.LOGOUT
    };
};