import React from "react";
import {Mermaid} from "./Mermaid"
import Diagram from "./Diagram"
import {useGlobalState} from '../state';
import ConfigurationForm from "./ConfigurationForm";
import { Paper, Typography, Grid } from "@material-ui/core";

const Canvas = () => {
    const [prophetAppData, update] = useGlobalState('prophetAppData');
    const [selectedMs] = useGlobalState('ms');
    const [contextMap] = useGlobalState('contextMap');
    const [communication] = useGlobalState('communication');
    return (
        <div>
            <ConfigurationForm/>

            {/*<Mermaid*/}
            {/*    chart={*/}
            {/*        prophetAppData.global.contextMap} />*/}

            {/*<Mermaid*/}
            {/*    chart={*/}
            {/*        prophetAppData.global.communication} />*/}
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4">
                        Global
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        Context Map Diagram
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <Mermaid chart={prophetAppData.global.contextMap}/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        Communication
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <Mermaid chart={prophetAppData.global.communication}/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">
                        Microservices
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                {prophetAppData.ms.map((ms, index) => {
                        return <Diagram ms={ms} />
                    })
                }
                </Grid>
                
            </Grid>
            
            
            

            {contextMap &&
            <Mermaid
                chart={
                    prophetAppData.global.contextMap} />
            }

            {communication &&

            <Mermaid
                chart={
                    prophetAppData.global.communication} />
            }

            
        </div>
    );
}

export default Canvas;
