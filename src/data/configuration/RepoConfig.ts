import {ProphetAppData} from "../ProphetAppData";
import {AnalysisErrors} from "../AnalysisErrors";

export class RepoConfiguration {
    id: number;
    data: ProphetAppData;
    repo: string;
    org: string;
    detail: {};
    analysisErrors: AnalysisErrors;
    isMonolith: boolean;
}
