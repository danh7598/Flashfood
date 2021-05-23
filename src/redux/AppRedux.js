import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { myCartReducer } from './MyCart/MyCartReducer';
import { foodDetailsReducer } from './FoodDetail/FoodDetailReducer';
import { authenticationReducer } from './Authentication/AuthenticationReducer';
import rootSaga from './rootSagas';
//Kết hợp tất cả reducer lại với nhau
const allReducers = combineReducers({
    myCartReducer, foodDetailsReducer, authenticationReducer
});

//Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//Bỏ vô chung store and sagaMiddleware
export const store = createStore(
    allReducers,
    applyMiddleware(sagaMiddleware)
);

//then run saga 
sagaMiddleware.run(rootSaga);