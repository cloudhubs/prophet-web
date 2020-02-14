import React from "react";
import {Button, Paper, Grid, IconButton, Tooltip, Fab, Typography, Divider} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {useGlobalState} from "../state";
import {ProphetWebRequest} from "../data/ProphetWebRequest";
import axios from "axios";
import AutosizeInput from 'react-input-autosize';
import ConfigList from './ConfigList';
import RepositoryForm from "./RepositoryForm";
import { ReqConfigSingle } from "../data/ReqConfigSingle";
import AddIcon from '@material-ui/icons/Add';


const ConfigurationForm = () => {
    const [vData, uData] = useGlobalState('prophetAppData');
    const [vRepo, uRepo] = useGlobalState('repository');
    const [vOrg, uOrg] = useGlobalState('organization');
    const [vBackend] = useGlobalState('backendUrl');
    const [vContextMap, uContextMap] = useGlobalState('contextMap');
    const [vConfigSingle, uConfigSingle] = useGlobalState('isConfigSingle');
    const [vConfigMultiple, uConfigMultiple] = useGlobalState('configMultiple');
    

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
                overflow: 'hidden',
                padding: theme.spacing(0, 3),
            },
            
            paper: {
                // margin: `${theme.spacing(1)}px auto`,
                padding: theme.spacing(2),
            },
            url: {
                width: '10em'
            },
            boxik: {
                padding: '10px'
            },
            fab: {

            },
            toggle: {
                size: '40px'
            },
            addButton: {
                margin: `${theme.spacing(1)}px auto`,
                // padding: theme.spacing(2),
            }
        }),
    );

    const classes = useStyles();

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        uRepo(e.currentTarget.value)
    };

    let checked = false;

    const onSubmit = async () => {
        let prophetWebRequest: ProphetWebRequest = new ProphetWebRequest(vRepo);
        const response = await axios.post(
            "http://127.0.0.1:8080",
            prophetWebRequest,
            { headers: { 'Content-Type': 'application/json' } }
        );
        console.log(response.data);
        uData(response.data);
        uContextMap(true);
    }

    

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {/* <Grid item xs={12}>
                    <Button type="submit" onClick={onAdd} className={classes.addButton}>More Repositories</Button>
                </Grid> */}

<Grid item xs={12}>
<Typography variant="h4">
                        Configuration
                    </Typography>
                    <Divider/>
    </Grid>

                
                
                <Grid item xs={6}>
                    <ConfigList/>
                    {/* <Tooltip title="Add" aria-label="add">
                        <Fab color="primary" className={classes.fab}>
                        <AddIcon />
                        </Fab>
                    </Tooltip> */}
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <ol>
                            <li>Insert organization and repository</li>
                            <li>Check if the repository is monolith or set of microservices</li>
                        </ol>
                    </Paper>
                    
                </Grid>
                <Grid item xs={12}>

                    
                    {/* onClick={(e) => onRemove(index)} */}
                   
                </Grid>
                
            </Grid>
            
        </div>
    );
}

//curl -i https://api.github.com/users/cloudhubs


export default ConfigurationForm;
