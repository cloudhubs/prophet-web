import { createGlobalState } from 'react-hooks-global-state';
import {ProphetAppData} from "./data/ProphetAppData";
import {Configuration} from "./data/Configuration";
import {ReqConfigSingle} from "./data/ReqConfigSingle";
import { createStore } from "react-hooks-global-state";


// type Action =
//   | { type: "setMultipleConfigRepo", index: number, repository: string }
//   | { type: "decrement" };

// const reducer = (state = initialState, action: Action) => {
//     switch (action.type) {
//         case "setMultipleConfigRepo":
//         return {
//             ...state,
//             backendUrl: action.repository,
//             configMultiple: [
                
//             ]
//         };
//         case "decrement":
//         return {
//             ...state
//         };
//         default:
//         return state;
//     }
// };



// interface InitState {
//     backendUrl: string;
//     organization: string
//     repository: string;
//     communicationGraph: string;
//     prophetAppData: any;
//     ms: string;
//     contextMap: boolean;
//     communication: boolean;
//     // configMultiple: [new ReqConfigSingle(0), new ReqConfigSingle(1)],
//     configMultiple: any[],
//     configSingle: any
//     isConfigSingle: boolean
// }

// const initialState: InitState = {
//     backendUrl: 'localhost:8080',
//     organization: 'cloudhubs',
//     repository: 'tms',
//     communicationGraph: `graph LR;
//         A-->B;
//         B-->C;
//         B-->D[name];
//       `,
//     prophetAppData: data,
//     ms: "",
//     contextMap: false,
//     communication: false,
//     // configMultiple: [new ReqConfigSingle(0), new ReqConfigSingle(1)],
//     configMultiple: [],

//     configSingle: {},
//     isConfigSingle: true
// }

// export const { dispatch, useGlobalState } = createStore(reducer, initialState);


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
    configMultiple: [new ReqConfigSingle(0), new ReqConfigSingle(1)],
    configSingle: {},
    isConfigSingle: true,
});
