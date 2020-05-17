import {RepoConfig} from "../model/RepoConfig";
import {ProphetAppData} from "../model/ProphetAppData";
import {ServerErrors} from "../model/ServerErrors";
import {Prophet} from "../model/configuration/Prophet";
import {Global} from "../model/Global";
import {Ms} from "../model/Ms";

export type State = {
    global: Global;
    ms: Ms[];
    // prophetConfigs: Prophet;
    // backendUrl: string;
    // organization: string;
    // repository: string;
    // communicationGraph: string;
    // prophetAppData: ProphetAppData;
    // loading: boolean;
    // ms: string;
    // contextMap: boolean;
    // communication: boolean;
    // configMultiple: RepoConfig[];
    // configSingle: {};
    // isConfigSingle: boolean;
    // analysisError: ServerErrors;
    // githubUrl: string;

}
