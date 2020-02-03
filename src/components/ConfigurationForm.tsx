import React from "react";
import {Box, Button, TextField} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {useGlobalState} from "../state";
import {ProphetAppData} from "../data/ProphetAppData";
import {ProphetWebRequest} from "../data/ProphetWebRequest";
import axios from "axios";

const ConfigurationForm = () => {
    const [vData, uData] = useGlobalState('prophetAppData');
    const [vRepo, uRepo] = useGlobalState('repository');
    const [vBackend] = useGlobalState('backendUrl');
    const [vContextMap, uContextMap] = useGlobalState('contextMap');

    const classes = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
                overflow: 'hidden',
                padding: theme.spacing(0, 3),
            },
            paper: {
                maxWidth: 400,
                margin: `${theme.spacing(1)}px auto`,
                padding: theme.spacing(2),
            },
        }),
    );

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        uRepo(e.currentTarget.value)
    };

    const onSubmit = async () => {
        let prophetWebRequest: ProphetWebRequest = new ProphetWebRequest(vRepo);
        //
        const response = await axios.post(
            "http://127.0.0.1:8080",
            prophetWebRequest,
            { headers: { 'Content-Type': 'application/json' } }
        )
        console.log(response.data);
        uData(response.data);
        uContextMap(true)

        // fetch("localhost:8080", {
        //     method: "post",
        //     headers: new Headers({
        //         "Content-Type": "application/json",
        //         Accept: "application/json"
        //     }),
        //     body: JSON.stringify(prophetWebRequest)
        // })
        //     .then(response => response.json())
        //     .then((response: ProphetAppData) => {
        //         uData(response);
        //     }).catch(
        //         error => {
        //             console.log(error);
        //         }
        // )
    }

    return (
        <div>
            <Box component="span" m={1}>
                https://github.com/<input type="text" value={vRepo} onChange={onChange}/>
                <button type="submit" onClick={onSubmit}>Submit</button>

            </Box>

            {/*<Box>*/}
            {/*    <TextField placeholder="Organization"/>*/}
            {/*    /*/}
            {/*    <TextField placeholder="Repository"/>*/}

            {/*    <Button*/}
            {/*        variant="contained"*/}
            {/*        color="secondary">*/}
            {/*        Analyze*/}
            {/*    </Button>*/}
            {/*</Box>*/}

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
