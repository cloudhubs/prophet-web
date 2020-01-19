import React from "react";
import mermaid from "mermaid";

interface Props {}

interface State {
    github: string;
    prophetAppUrl: string;
    prophetRequest: ProphetRequest;
};

interface ProphetRequest {
    url: string
}

export class CommunicationDiagram extends React.Component<Props, State> {



    componentDidMount() {
        let output = document.getElementById('output');
        mermaid.initialize({startOnLoad: true});

        const graphDefinition = `graph TB
        a-->b
        b-->a`;

        mermaid.render('theGraph', graphDefinition, function (svgCode) {
            if (output != null){
                console.log("rendering mermaid");
                output.innerHTML = svgCode;
            }
        });
    }

    render() {
        return (
            <div>
                <div id="output"></div>
            </div>
        )
    }

}