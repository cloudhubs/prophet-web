import {ProphetAppData} from "../data/ProphetAppData";
import {ServerErrors} from "../data/ServerErrors";
import {ErrorItem} from "../data/ErrorItem";
import {RepoConfig} from "../data/RepoConfig";
import {State} from "./state";
import {ProphetConfigs} from "../data/configuration/ProphetConfigs";

const data: ProphetAppData = {
    global: {
        projectName: "TMS",
        communication: `graph LR;A-->B;B-->C;`,
        contextMap: `graph TD;D-->E;E-->F;F-->G;`,
    },
    ms: [
        {
            name: "msa",
            boundedContext: `graph LR;
        I-->J;
        J-->K;
        I-->W;`,
        },
    ],
    isMonolith: false
}

function getAnalysisErrors() {
    let analysisErrors = new ServerErrors();
    let annotationError = new ErrorItem("No supported annotations found");
    let javaError = new ErrorItem("Java code not found");
    analysisErrors.errors.push(annotationError);
    analysisErrors.errors.push(javaError);
    return analysisErrors;
}

export const defaultState: State = {
    prophetConfigs: {
        repoConfigurations: []
    },
    //deprecated
    backendUrl: 'localhost:8080',
    organization: 'cloudhubs',
    repository: 'tms',
    communicationGraph: `graph LR;
        A-->B;
        B-->C;
        B-->D[name];
      `,
    prophetAppData: data,
    loading: false,
    ms: "",
    contextMap: false,
    communication: false,
    configMultiple: [new RepoConfig(), new RepoConfig()],
    configSingle: {},
    isConfigSingle: true,
    analysisError: getAnalysisErrors(),
    githubUrl: ""
}
