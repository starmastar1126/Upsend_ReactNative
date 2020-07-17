  
import types from './types';

const initialState = {
    logged: false,
    user: {
        api_token: "oWequ4LCyJJKZdjb1GZrAhuWIhXmaiY09BxmoYetd790svWrvIXAOmFmfdTc",
        device_token: null,
        user_id: 12,
        user_name: "ddd",
        user_email: "ddd@qq.com",
        user_gender: 1,
        user_mobile: "1239876540",
        user_password: "$2y$10$SZ1bv0wBnK2AZr4BM0aMeOdwj/dLu91BrtCI/Pu./88I1dYyMpIda",
        user_pic: null,
        status: 1,
        timestamp: "2020-06-08 02:46:27",
    }
};

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGGED:
            return {
                ...state,
                logged: action.payload,
            };
        case types.SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}