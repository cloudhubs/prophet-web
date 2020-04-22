import {ReqConfigSingle} from "../data/ReqConfigSingle";
import {ProphetAppData} from "../data/ProphetAppData";
import {AnalysisErrors} from "../data/AnalysisErrors";


export type State = {
    backendUrl: string;
    organization: string;
    repository: string;
    communicationGraph: string;
    prophetAppData: ProphetAppData;
    loading: boolean;
    ms: string;
    contextMap: boolean;
    communication: boolean;
    configMultiple: ReqConfigSingle[];
    configSingle: {};
    isConfigSingle: boolean;
    analysisError: AnalysisErrors;

}
