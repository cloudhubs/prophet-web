import React from "react";
import {useGlobalState} from '../state';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AutosizeInput from 'react-input-autosize';
import {Checkbox, Paper} from '@material-ui/core';

interface RepositoryFormProps {
    index: number;
}

const RepositoryForm = (props: RepositoryFormProps) => {
    const [vConfigMultiple, uConfigMultiple] = useGlobalState('configMultiple');
    const [vRepository, uRepository] = useGlobalState('repository');

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            autoSizeInput: {
                margin: '2px'
            },
            boxik: {
                padding: '10px'
            }
        }),
    );
    const classes = useStyles();

    const handleMonolith = (e: React.FormEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value);
        console.log(e.currentTarget.value);
        console.log(e.currentTarget.value);
        let newVal =JSON.parse(JSON.stringify(vConfigMultiple));
        // newVal[props.index].isMonolith = e.currentTarget.value;
        uConfigMultiple(newVal);
    };

    const handleOrganization = (e: React.FormEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value);
        let newVal =JSON.parse(JSON.stringify(vConfigMultiple));
        newVal[props.index].organization = e.currentTarget.value;
        console.log(newVal);
        uConfigMultiple(newVal);
        console.log(vConfigMultiple);
    };

    const handleRepository = (e: React.FormEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value);
        let newVal =JSON.parse(JSON.stringify(vConfigMultiple));
        console.log(newVal);
        newVal[props.index].repository = e.currentTarget.value;
        console.log(newVal);
        uConfigMultiple(newVal);
        console.log(vConfigMultiple);
    };

    const handleRepo = (e: React.FormEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value);
        uRepository(e.currentTarget.value);
    }

    return (

        <div>
            {props.index} :

            <Paper className={classes.boxik}>
                    https://github.com/

                    {/* <AutosizeInput className={classes.autoSizeInput} 
                        name="myRepo"
                        value={vRepository}
                        onChange={handleRepo}/> */}
                    
                    <AutosizeInput
                        name="organization"
                        placeholder="Organization"
                        value={vConfigMultiple[props.index].organization}
                        onChange={handleOrganization}
                    />
                    /
                    
                    <AutosizeInput
                        className={classes.autoSizeInput}
                        name="repository"
                        placeholder="Repository"
                        value={vConfigMultiple[props.index].repository}
                        onChange={handleRepository}
                    />
                    <Checkbox
                        checked={vConfigMultiple[props.index].isMonolith}
                        onChange={handleMonolith}
                        value={true}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />monolith

                    : {vConfigMultiple[props.index].repository}


                </Paper>

        </div>
    )
}

export default RepositoryForm;