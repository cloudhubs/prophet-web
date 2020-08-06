import React from "react";
import {Card, CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Mermaid} from "./Mermaid";
import {Global} from "../../model/Global";

type Props = {
    global: Global;
}


/**
 * Passes global and microservice variables from state to stateless
 * components
 * @variables Global and Ms object from State
 * @stateful
 * @constructor
 *
 */
const Communication = (props: Props) => {
    const communication = (
        <>
            <Card style={{marginBottom: '20px'}}>
                <CardContent >
                    <Typography component="h4" variant="h4">
                        Communication Diagram
                    </Typography>
                    <div style={{overflow: 'auto'}}>
                        <Mermaid chart={props.global.communication} index={0}/>
                    </div>
                </CardContent>
            </Card>
        </>
    );
    return (
        <React.Fragment>
            {communication}
        </React.Fragment>
    )
}
export default Communication;
