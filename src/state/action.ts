import {ProphetAppData} from "../data/ProphetAppData";

export type Action =
    | { type: "setGithubUrl", githubUrl: string }
    | { type: "setProphetAppData", currentUser: ProphetAppData };
