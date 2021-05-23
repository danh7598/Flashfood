import { ACTION_AUTHENTICATION } from '../Actions';


const initialState = {
    loading: false,
};

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_AUTHENTICATION.LOGIN_SUCCESS: {
            // console.log("ABC");
            return {
                ...state,
                userCredential: action.payload
            };
        }


        case ACTION_AUTHENTICATION.LOGIN_FAIL:
            return {};

        case ACTION_AUTHENTICATION.SET_LOADING: {
            // console.log(action.payload);
            return {
                ...state,
                loading: action.payload
            };
        }

        default:
            return state;
    }
};