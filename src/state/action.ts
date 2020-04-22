import {ProphetAppData} from "../data/ProphetAppData";

export type Action =
    | { type: "setProphetAppData", currentUser: ProphetAppData };
