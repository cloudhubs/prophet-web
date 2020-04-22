import {Action} from "./action";
import {initialState} from "./initState";


export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        // case "setServerToken":
        //     return {
        //         ...state,
        //         serverToken: action.serverToken
        //     }

        default:
            return state;
    }
};
