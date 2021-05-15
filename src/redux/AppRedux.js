import { combineReducers, createStore } from "redux";


//Kết hợp tất cả reducer lại với nhau
const allReducers = combineReducers({

});

//Bỏ vô chung store
export const store = createStore(allReducers);