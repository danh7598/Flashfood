import { useSelector } from "react-redux";
// import { dataCart } from "../../string/FakeData";
import { ACTION_CART } from "../Actions";

const initialState = {
    dataCart: [],
};

export const myCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CART.GET_LIST_CART:
            return {
                ...state,
            };
        case ACTION_CART.ADD_ITEM: {

            let dataCart = [...state.dataCart];
            let checkData;
            checkData = dataCart.every((item, index) => {
                if (item.id === action.payload.id) {
                    dataCart[index].quantity += action.payload.quantity;
                    return false; //Return false stop loop
                }
                return true; //Return true continue loop
            });

            // console.log(checkData);


            //If checkData false, mean item existed, just return new dataCart with new quantity
            if (!checkData) {
                return {
                    ...state,
                    dataCart
                };
            } else { //If checkData true, mean item don't exist, push new Item to dataCart and return
                dataCart.push(action.payload);
                return {
                    ...state,
                    dataCart
                };
            }


        }
        case ACTION_CART.INCREASE_ITEM: {
            let dataCart = [...state.dataCart];
            ++dataCart[action.payload].quantity;
            return {
                ...state,
                dataCart
            };
        }

        case ACTION_CART.DECREASE_ITEM: {
            let dataCart = [...state.dataCart];
            --dataCart[action.payload].quantity;
            return {
                ...state,
                dataCart
            };
        }

        case ACTION_CART.REMOVE_ITEM: {
            let dataCart = [...state.dataCart];
            dataCart.splice(action.payload, 1);
            return {
                ...state,
                dataCart,
            };
        }
        default:
            return state;
    }
};