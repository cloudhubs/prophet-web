import React from "react";
import {Box, Button, Checkbox, Paper, Grid} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {useGlobalState} from "../state";
import {ProphetWebRequest} from "../data/ProphetWebRequest";
import axios from "axios";
import AutosizeInput from 'react-input-autosize';
import ConfigList from './ConfigList';

const ConfigurationForm = () => {
    const [vData, uData] = useGlobalState('prophetAppData');
    const [vRepo, uRepo] = useGlobalState('repository');
    const [vOrg, uOrg] = useGlobalState('organization');
    const [vBackend] = useGlobalState('backendUrl');
    const [vContextMap, uContextMap] = useGlobalState('contextMap');
    const [vConfigSingle, uConfigSingle] = useGlobalState('isConfigSingle');

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
                overflow: 'hidden',
                padding: theme.spacing(0, 3),
            },
            paper: {
                // maxWidth: 400,
                margin: `${theme.spacing(1)}px auto`,
                padding: theme.spacing(2),
            },
            url: {
                width: '10em'
            },
            boxik: {
                padding: '10px'
            },
            autoSizeInput: {
                margin: '2px'
            },
            toggle: {
                size: '40px'
            },
        }),
    );

    const classes = useStyles();

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        uRepo(e.currentTarget.value)
    };

    const handleCheckBox = (e: React.FormEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value);
    };


    const handleOrganization = (e: React.FormEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value);
        uOrg(e.currentTarget.value);
    };

    const handleRepository = (e: React.FormEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value);
        uRepo(e.currentTarget.value);
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

            <ConfigList/>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        Checkbox:

                        <Checkbox
                            checked={checked}
                            onChange={handleCheckBox}
                            value="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            </Grid>

            <Box component="span" m={2}>

                <Paper className={classes.boxik}>
                    Checkbox:

                    <Checkbox
                        checked={checked}
                        onChange={handleCheckBox}
                        value="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </Paper>


            </Box>


            <Box component="span" m={1}>



                {/*<div>*/}
                {/*    {prophetAppData.ms.map((ms, index) => (*/}

                {/*        <ListItem button key={ms.name} onClick={(e) => activateMs(ms.name)}>*/}
                {/*            <ListItemIcon >{ <FolderIcon /> }</ListItemIcon>*/}
                {/*            <ListItemText primary={ms.name} />*/}
                {/*        </ListItem>*/}

                {/*    ))}*/}
                {/*</div>*/}

                <Paper className={classes.boxik}>
                    https://github.com/
                    
                    <AutosizeInput
                        name="organization"
                        value={vOrg}
                        onChange={handleOrganization}
                    />
                    /
                    <AutosizeInput
                        className={classes.autoSizeInput}
                        name="repository"
                        value={vRepo}
                        onChange={handleRepository}
                    />
                    <Checkbox
                        checked={checked}
                        onChange={handleCheckBox}
                        value="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />monolith

                </Paper>

                <button type="submit" onClick={onSubmit}>Add +</button>

            </Box>

            <Box>
                {/*<span className={classes.url}>https://github.com/</span>*/}

                {/*<TextField value="https://github.com/" disabled={true} className={classes.url}/>*/}

                {/*<TextField placeholder="Organization" fullWidth/>*/}
                {/*/*/}
                {/*<TextField placeholder="Repository"/>*/}

                <Button
                    // variant="contained"
                    color="primary">
                    Analyze
                </Button>

            </Box>

            {/*<Box>*/}
            {/*    Organization*/}
            {/*</Box>*/}

            {/*<Box>*/}
            {/*    Repositories*/}
            {/*</Box>*/}
        </div>
    );
}

//curl -i https://api.github.com/users/cloudhubs


export default ConfigurationForm;
