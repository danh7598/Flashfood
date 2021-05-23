import { put, takeEvery, all } from 'redux-saga/effects';

import { ACTION_CART } from '../Actions';
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export function* helloSaga() {
    console.log("Hello saga");
}

function* increment() {
    // yield delay(1000);
    // console.log("Increase item");
}

//Run increment() when action INCREASE_ITEM dispatch
export function* watchIncrement() {
    yield takeEvery(ACTION_CART.INCREASE_ITEM, increment);
};

function* decrement() {
    // yield delay(1000);
    // console.log("Decrease item");
}
//Run decrement() when action DECREASE_ITEM dispatch
export function* watchDecrement() {
    yield takeEvery(ACTION_CART.DECREASE_ITEM, decrement);
};