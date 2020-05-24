import {Action} from "./action";
import {initialState} from "./initState";


export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "setGithubUrl":
            return {
                ...state,
                githubUrl: action.githubUrl
            }
        case "setGlobal":
            console.log("setting gloval");
            console.log(action.global);
            return {
                ...state,
                global: action.global
            }
        case "setMs":
            return {
                ...state,
                ms: action.ms
            }
        case "startLoading":
            return {
                ...state,
                loading: true
            }
        case "stopLoading":
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
};
