import React from "react";
import {Mermaid} from "../Mermaid";
import {Ms} from "../../model/Ms";
import {render} from "react-dom";

type Props = {
    ms: Ms;
}

const MsDiagram = (props: Props) => {

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
            <Mermaid chart={props.ms.boundedContext}/>}
        </>
    );

    return (
        <React.Fragment>
            {name}
            {props.ms.notJava && !props.ms.noBoundedContext && {notJava} }
            {!props.ms.notJava && props.ms.noBoundedContext && {noBoundedContext} }
            {!props.ms.notJava && !props.ms.noBoundedContext && boundedContext}
        </React.Fragment>
    )
}
export default MsDiagram;
