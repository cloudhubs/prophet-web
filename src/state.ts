import { createGlobalState } from 'react-hooks-global-state';
import {ProphetAppData} from "./data/ProphetAppData";
import {Configuration} from "./data/Configuration";

const data: ProphetAppData = {
    global: {
        projectName: "TMS",
        communication: `graph LR;EMS-->CMS;QMSa-->CMS;`,
        contextMap: `graph TD;User-->Exam;Exam-->Question;Exam-->Answer;`,
    },
    ms: [
        {
            name: "EMS",
            boundedContext: `graph LR;
        User-->Exam;
        Exam-->Choice;
        Choice-->Answer;`,
        },
        {
            name: "CMS",
            boundedContext: `graph LR;
        Question-->Language;
        Question-->Code;
        Question-->Choice;
        Exam-->Question;`,
        },
    ],
    isMonolith: false
}

export const { GlobalStateProvider, useGlobalState } = createGlobalState({
    backendUrl: 'localhost:8080',
    repository: 'cloudhubs/tms',
    communicationGraph: `graph LR;
        A-->B;
        B-->C;
        B-->D[name];
      `,
    prophetAppData: data,
    ms: "",
    contextMap: true,
    communication: false
});