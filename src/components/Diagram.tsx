import React from "react";
import {Mermaid} from "./Mermaid"
import { Typography, Grid } from "@material-ui/core";

interface DiagramProps {
    ms?: any;
}

const Diagram = (props: DiagramProps) => {
    return (
        <div>
            <Grid item xs={12}>
                <Typography variant="h5">
                    Context Map Diagram
                </Typography>
            </Grid>
            <Mermaid
                chart={
                    props.ms.boundedContext} />
                            
        </div>
    );
}

export default Diagram;