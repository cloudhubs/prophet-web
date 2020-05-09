import {ProphetAppData} from "../ProphetAppData";
import {ServerErrors} from "../ServerErrors";

export class RepoConfig {
    id: number;
    data: ProphetAppData;
    repo: string;
    org: string;
    detail: {};
    analysisErrors: ServerErrors;
    isMonolith: boolean;
}
