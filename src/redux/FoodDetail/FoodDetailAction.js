import { ACTION_FOOD_DETAIL } from '../Actions';

export const actionIncreaseFoodDetail = (foodItem) => {
    return {
        type: ACTION_FOOD_DETAIL.INCREASE,
        payload: foodItem
    };
};

export const actionDecreaseFoodDetail = (foodItem) => {
    return {
        type: ACTION_FOOD_DETAIL.DECREASE,
        payload: foodItem
    };
};

export const actionAddFoodDetail = (foodItem) => {
    return {
        type: ACTION_FOOD_DETAIL.ADD,
        payload: foodItem
    };
};