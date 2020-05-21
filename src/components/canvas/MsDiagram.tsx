import React from "react";
import {Mermaid} from "./Mermaid";
import {Ms} from "../../model/Ms";

type Props = {
    ms: Ms;
}

/**
 * ToDo: Vincent, create frames for components, alignments, etc.
 * @param props
 * @constructor
 */
const MsDiagram = (props: Props) => {

    const displayNotJava = props.ms.notJava;
    const displayNoBoundedContext = props.ms.noBoundedContext;

    const name = (
      <>
          {props.ms.name}
      </>
    );

    const notJava = (
        <>
            {'Microservice does not support Spring Annotations, more:'}
        </>
    )

    const noBoundedContext = (
        <>
            {'Microservice does not have model, more: '}
        </>
    )

    const boundedContext = (
        <>
            <Mermaid chart={props.ms.boundedContext}/>
        </>
    );

    return (
        <React.Fragment>
            {name}
            {displayNotJava ? notJava : <></> }
            {displayNoBoundedContext ? noBoundedContext : <></> }
            {!props.ms.notJava && !props.ms.noBoundedContext && boundedContext}
        </React.Fragment>
    )
}
export default MsDiagram;
