import { createGlobalState } from 'react-hooks-global-state';
import {ProphetAppData} from "./data/ProphetAppData";
import {Configuration} from "./data/Configuration";
import {ReqConfigSingle} from "./data/ReqConfigSingle";

const data: ProphetAppData = {
    global: {
        projectName: "TMS",
        communication: `graph LR;A-->B;B-->C;`,
        contextMap: `graph TD;D-->E;E-->F;F-->G;`,
    },
    ms: [
        // {
        //     name: "EMS",
        //     boundedContext: `graph LR;
        // I-->J;
        // J-->K;
        // I-->W;`,
        // },
        // {
        //     name: "CMS",
        //     boundedContext: `graph LR;
        // A-->B;
        // B-->C;
        // C-->D;
        // E-->F;`,
        // },
    ],
    isMonolith: false
}

export const { useGlobalState } = createGlobalState({
    backendUrl: 'localhost:8080',
    organization: 'cloudhubs',
    repository: 'tms',
    communicationGraph: `graph LR;
        A-->B;
        B-->C;
        B-->D[name];
      `,
    prophetAppData: data,
    ms: "",
    contextMap: false,
    communication: false,
    configMultiple: [new ReqConfigSingle(), new ReqConfigSingle()],
    configSingle: {},
    isConfigSingle: true,
});
