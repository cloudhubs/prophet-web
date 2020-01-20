import { createGlobalState } from 'react-hooks-global-state';
import {ProphetAppData} from "./data/ProphetAppData";
import {Configuration} from "./data/Configuration";

const data: ProphetAppData = {
    global: {
        projectName: "TMS",
        communication: `graph LR;
        A-->B;
        B-->C;
        B-->D[tms];`,
        contextMap: `graph LR;
        A-->B;
        B-->C;
        B-->D[context];`,
    },
    ms: [
        {
            name: "EMS",
            boundedContext: `graph LR;
        A-->B;
        B-->C;
        B-->D[ems];`,
        },
        {
            name: "CMS",
            boundedContext: `graph LR;
        A-->B;
        B-->C;
        B-->D[cms];`,
        },
    ],
    isMonolith: false
}

export const { GlobalStateProvider, useGlobalState } = createGlobalState({
    repository: '',
    communicationGraph: `graph LR;
        A-->B;
        B-->C;
        B-->D[name];
      `,
    prophetAppData: data,
    configuration: new Configuration('', '', false, false)
});