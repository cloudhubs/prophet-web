import React from "react";
import Graph from "react-graph-vis";

interface Props {}

interface State {
    graph: any;
    options: any;
    events: any;
};

interface ProphetRequest {
    url: string
}

export class UMLClassDiagram extends React.Component<Props, State> {
    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {
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
        };


    }

    render() {
        return (
            <div>
                Inside UML Class Diagram
                Graph:
                <Graph
                    graph={this.state.graph}
                    options={this.state.options}
                    events={this.state.events}
                    getNetwork={()=> {
                        //  if you want access to vis.js network api you can set the state in a parent component using this property
                    }}
                />
            </div>
        )
    }

}