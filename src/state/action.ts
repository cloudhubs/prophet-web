import {ProphetAppData} from "../model/ProphetAppData";

export type Action =
    | { type: "setGithubUrl", githubUrl: string }
    | { type: "setProphetAppData", currentUser: ProphetAppData };
