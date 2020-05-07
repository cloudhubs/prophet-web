import {RepoConfig} from "../data/RepoConfig";
import {ProphetAppData} from "../data/ProphetAppData";
import {ServerErrors} from "../data/ServerErrors";
import {ProphetConfigs} from "../data/configuration/ProphetConfigs";


export type State = {
    prophetConfigs: ProphetConfigs;
    backendUrl: string;
    organization: string;
    repository: string;
    communicationGraph: string;
    prophetAppData: ProphetAppData;
    loading: boolean;
    ms: string;
    contextMap: boolean;
    communication: boolean;
    configMultiple: RepoConfig[];
    configSingle: {};
    isConfigSingle: boolean;
    analysisError: ServerErrors;

}
