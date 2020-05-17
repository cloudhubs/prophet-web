import React from "react";
import {useGlobalState} from "../../state/appState";
import GlobalDiagrams from "./GlobalDiagrams";
import MsDiagram from "./MsDiagram";
import {Ms} from "../../model/Ms";

/**
 * Passes global and microservice variables from state to stateless
 * components
 * @variables Global and Ms object from State
 * @stateful
 * @constructor
 *
 */
const Diagrams = () => {

    const [global] = useGlobalState('global');
    const [ms] = useGlobalState('ms');
    //ToDo: loading
    return (
        <React.Fragment>
            <GlobalDiagrams global={global}/>
            {ms.map((m: Ms) => (<MsDiagram ms={m}/>))}
        </React.Fragment>
    )
}
export default Diagrams;
