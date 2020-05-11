import {ProphetAppData} from "../model/ProphetAppData";
import {ServerErrors} from "../model/ServerErrors";
import {ErrorItem} from "../model/ErrorItem";
import {RepoConfig} from "../model/RepoConfig";
import {State} from "./state";
import {Prophet} from "../model/configuration/Prophet";
import {MicroserviceData} from "../model/configuration/MicroserviceData";

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
    let annotationError = new ErrorItem(0, "No supported annotations found");
    let javaError = new ErrorItem( 1, "Java code not found");
    let notGitHubUrl = new ErrorItem(10, "Provided address is not Github URL");
    let notOrganization = new ErrorItem (11, "Provided address does not contain valid organization");
    let notRepository = new ErrorItem (12, "Provided address does not contain valid repository");
    analysisErrors.errors.push(annotationError);
    analysisErrors.errors.push(javaError);
    analysisErrors.errors.push(notGitHubUrl);
    analysisErrors.errors.push(notOrganization);
    analysisErrors.errors.push(notRepository);
    return analysisErrors;
}

export const defaultState: State = {
    prophetConfigs: {
        repoConfigurations: [
            {
                id: 0, // web app generated ID
                data: {
                    communication: "graph LR;A-->B;B-->C;", // from prophet
                    contextMap: "graph LR;A-->B;B-->C;", // from prophet
                    microservices: [
                        {
                            boundedContext: "graph LR;A-->B;B-->C;", // from prophet
                            detail: { // from github api
                                name: "acmsac",
                                html_url: "https://github.com/cloudhubs/acmsac",
                                full_name: "cloudhubs/acmsac",
                                analysisErrors: [] //true false array
                            },
                        },
                    ]
                },
                repo: "tms", // derived repository
                org: "cloudhubs", // derived organization
                detail: { // detail fetched from github API
                    name: "Cloudhubs",
                    location: "Hankamer Academic Building, 105 Baylor Ave, Suite H266, Waco, TX 76706",
                    avatar_url: "https://avatars2.githubusercontent.com/u/56092418?v=4",
                    html_url: "https://github.com/cloudhubs"
                },
                repositoryErrors: {
                    errors: []
                },
                isMonolith: true,
                url: "https://github.com/cloudhubs/tms", // user given link

            }
        ]

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
