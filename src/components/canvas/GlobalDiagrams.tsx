import React from "react";
import {Global} from "../../model/Global";
import {Mermaid} from "./Mermaid";

type Props = {
    global: Global;
}

/**
 * ToDo: Vincent, create frames for components, alignments, etc.
 * Displays communication and context map diagrams if present
 * otherwise display error notification
 * @param props: Global object from state
 * @stateless
 */
const GlobalDiagrams = (props: Props) => {

    const communication = (
        <>
            <Mermaid chart={props.global.communication}/>}
        </>
    );

    const contextMap = (
        <>
            <Mermaid chart={props.global.contextMap}/>}
        </>
    );

    return (
        <React.Fragment>
            {communication}
            {contextMap}
        </React.Fragment>
    )
}
export default GlobalDiagrams;
