import { useDispatch } from 'react-redux';
import { ACTION_FOOD_DETAIL, ACTION_CART } from '../Actions';
import { actionAddItemCart } from '../MyCart/MyCartAction';

const initialState = {
    currentItem: null
};

export const foodDetailsReducer = (state = initialState, action) => {
    // const dispatch = useDispatch();
    switch (action.type) {
        case ACTION_FOOD_DETAIL.ADD:
            // console.log("ADD ITEM");
            // dispatch(actionAddItemCart(action.payload));
            // console.log(action.payload);
            return {
                ...state,
                currentItem: action.payload
            };

        default:
            return {
                ...state,
            };
    }
};