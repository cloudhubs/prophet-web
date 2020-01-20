import React, {useEffect} from "react";
import mermaid from "mermaid";
import { useGlobalState } from '../state';

import Mermaid from 'react-mermaid';

type CommunicationDiagramState = {
    value: any;
    update: any;
}


export class CommunicationDiagram extends React.Component<{}, CommunicationDiagramState> {


    constructor() {
        super({});
        // this.setComponentState()

        // this.setState({
        //     value: value,
        //     update: update
        // })
    }

    // setComponentState(){
    //     const [value, update] = useGlobalState('communicationGraph');
    // }
    //
    // componentWillMount() {
    //
    // }
    //
    // componentDidMount(): void {
    //
    //
    //     let output = document.getElementById('output');
    //     console.log(output);
    //     mermaid.initialize({startOnLoad: true});
    //
    //     const graphDefinition = `graph TB
    //     a-->b
    //     b-->a`;
    //
    //     mermaid.render('theGraph', graphDefinition, function (svgCode) {
    //         if (output != null){
    //             console.log("rendering mermaid");
    //             output.innerHTML = svgCode;
    //         }
    //     });
    // }

    render() {
        return (
            <div>

            </div>
        )
    }
}