import { ACTION_CART } from "../Actions";

export const actionGetListCart = () => {
    return {
        type: ACTION_CART.GET_LIST_CART,

    };
};

export const actionAddItemCart = (itemCart) => {
    return {
        type: ACTION_CART.ADD_ITEM,
        payload: itemCart
    };
};


export const actionIncreaseItemCart = (itemIndex) => {
    return {
        type: ACTION_CART.INCREASE_ITEM,
        payload: itemIndex
    };
};

export const actionDecreaseItemCart = (itemIndex) => {
    return {
        type: ACTION_CART.DECREASE_ITEM,
        payload: itemIndex
    };
};

export const actionRemoveItemCart = (itemIndex) => {
    return {
        type: ACTION_CART.REMOVE_ITEM,
        payload: itemIndex
    };
};
