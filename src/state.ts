import { createGlobalState } from 'react-hooks-global-state';
import {ProphetAppData} from "./data/ProphetAppData";
import {Configuration} from "./data/Configuration";

export const { GlobalStateProvider, useGlobalState } = createGlobalState({
    repository: '',
    communicationGraph: `graph LR;
A-->B;
B-->C;
B-->D[name];
      `,
    prophetAppData: {},
    configuration: new Configuration('', '', false, false),
    graph: {
        nodes: [
            { id: 1, label: "Node 1", title: "node 1 tootip text", shape: "box" },
            { id: 2, label: "Node 2", title: "node 2 tootip text" },
            { id: 3, label: "Node 3", title: "node 3 tootip text" },
            { id: 4, label: "Node 4", title: "node 4 tootip text" },
            { id: 5, label: "Node 5", title: "node 5 tootip text" }
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 }
        ]
    },
    options: {
        layout: {
            hierarchical: true
        },
        edges: {
            color: "#000000"
        },
        height: "500px"
    },
    events: {
        select: (event: any) => {
            var { nodes, edges } = event;
        }
    }
});