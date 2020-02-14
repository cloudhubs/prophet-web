import React from "react";
import {Mermaid} from "./Mermaid"
import Diagram from "./Diagram"
import {useGlobalState} from '../state';
import ConfigurationForm from "./ConfigurationForm";
import { Paper, Typography, Grid, Divider } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const Canvas = () => {
    const [prophetAppData, update] = useGlobalState('prophetAppData');
    const [selectedMs] = useGlobalState('ms');
    const [contextMap] = useGlobalState('contextMap');
    const [communication] = useGlobalState('communication');
    const [loading] = useGlobalState('loading');
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            autoSizeInput: {
                margin: '2px'
            },
            boxik: {
                margin: theme.spacing(3, 3),
            },
            root: {
                flexGrow: 1,
                overflow: 'hidden',
                padding: theme.spacing(0, 3),
            }
        }),
    );
    const classes = useStyles();

    return (
        <div>
            <ConfigurationForm/>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12}>
                    <Typography variant="h4">
                        Global
                    </Typography>
                    <Divider/>

                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        Context Map Diagram
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        {!loading && <Mermaid chart={prophetAppData.global.contextMap}/>}
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        Communication
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                    {!loading && <Mermaid chart={prophetAppData.global.communication}/>}
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">
                        Microservices
                    </Typography>
                    <Divider/>
                </Grid>
                <Grid item xs={12}>
                {!loading && prophetAppData.ms.map((ms, index) => {
                        return <Diagram ms={ms} />
                    })
                }
                </Grid>
            </Grid>


        </div>
    );
}

export default Canvas;
