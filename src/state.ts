import { createGlobalState } from 'react-hooks-global-state';
import {ProphetAppData} from "./data/ProphetAppData";
import {Configuration} from "./data/Configuration";

const data: ProphetAppData = {
    global: {
        projectName: "TMS",
        communication: `graph LR;
        EMS-->CMS;
        QMS-->CMS;`,
        contextMap: `graph TD;
        User-->Exam;
        Exam-->Question;
        Exam-->Answer;`,
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
    repository: '',
    communicationGraph: `graph LR;
        A-->B;
        B-->C;
        B-->D[name];
      `,
    prophetAppData: data,
    configuration: new Configuration('', '', false, false),
    ms: "",
    contextMap: true,
    communication: false
});