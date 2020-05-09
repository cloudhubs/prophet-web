import {Action} from "./action";
import {initialState} from "./initState";


export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "setGithubUrl":
            return {
                ...state,
                githubUrl: action.githubUrl
            }
        default:
            return state;
    }
};
