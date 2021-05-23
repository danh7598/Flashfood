import { all } from 'redux-saga/effects';
import { watchLogin } from './Authentication/AuthenticationSagas';
import { helloSaga, watchIncrement, watchDecrement } from './MyCart/MyCartSagas';
//Only export rootSaga
//Single entry point to start all saga at once
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrement(),
        watchDecrement(),
        watchLogin()
    ]);
}