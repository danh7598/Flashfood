import { ACTION_AUTHENTICATION } from '../Actions';
import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase/app';
import "firebase/auth";
import { actionLoginFail, actionLoginSuccess, actionSetloading } from './AuthenticationActions';

function* loginWithEmailAndPassword(action) {
    try {
        const userCredential = yield firebase.auth().signInWithEmailAndPassword(action.payload.email, action.payload.password);
        // console.log(userCredential);
        yield put(actionLoginSuccess(userCredential));
        yield put(actionSetloading(false));
    }
    catch (error) {
        yield put(actionLoginFail(error));
        yield put(actionSetloading(false));
    }
};

export function* watchLogin() {
    yield takeLatest(ACTION_AUTHENTICATION.LOGIN, loginWithEmailAndPassword);
}