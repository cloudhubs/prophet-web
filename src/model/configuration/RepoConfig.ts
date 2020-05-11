import {ServerErrors} from "../ServerErrors";
import {ProphetData} from "./ProphetData";

export class RepoConfig {
    id: number;
    data: ProphetData;
    repo: string;
    org: string;
    detail: {};
    analysisErrors: ServerErrors;
    isMonolith: boolean;
    url: string;
}
