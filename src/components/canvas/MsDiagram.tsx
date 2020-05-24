import React from "react";
import {Mermaid} from "./Mermaid";
import {Ms} from "../../model/Ms";
import {Card} from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// import mermaid from "mermaid";
//
// mermaid.initialize({
//     startOnLoad: true,
//
// });

type Props = {
    ms: Ms;
    index: number;
}

/**
 * ToDo: Vincent, create frames for components, alignments, etc.
 * @param props
 * @constructor
 */
const MsDiagram = (props: Props) => {

    console.log(props.ms.name+" created");
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

            {/*<div className="mermaid">{props.ms.boundedContext}</div>*/}
            <Mermaid chart={props.ms.boundedContext} index={props.index}/>
        </>
    );

    return (
        <React.Fragment>
            <Card style={{marginBottom: '20px'}}>
                <CardContent>
                    <Typography component="h4" variant="h4">
                        {name}
                    </Typography>
                    <div style={{overflow: 'auto'}}>
                        {displayNotJava ? notJava : <></> }
                        {displayNoBoundedContext ? noBoundedContext : <></> }
                        {!props.ms.notJava && !props.ms.noBoundedContext && boundedContext}
                    </div>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
export default MsDiagram;
