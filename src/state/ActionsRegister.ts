import {dispatch} from "./appState";

const ActionsRegister = {

    setGithubUrl(githubUrl: string) {
        dispatch({
            githubUrl: githubUrl,
            type: 'setGithubUrl',
        })
    },


}

export default ActionsRegister;
