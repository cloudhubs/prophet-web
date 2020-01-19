import React from "react";
import {
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Checkbox,
    FormControlLabel,
    Box,
    Button
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

interface Props {}

interface State {
    repository: string;
    path: string;
    cached: boolean;
    persistDb: boolean;
    isMonolith: boolean;
    prophetAppUrl: string;
    prophetRequest: ProphetRequest;
    // all: boolean;
    // communication: boolean;
    // contextmap: boolean;
};

interface ProphetRequest {
    url: string
}



export class ConfigurationForm extends React.Component<Props, State> {
    state: State;
    classes: any;
    constructor(props: Props) {
        super(props);
        this.classes = makeStyles((theme: Theme) =>
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
        this.state = {
            repository: "prophet/tms",
            path: "",
            cached: true,
            persistDb: false,
            isMonolith: false,
            prophetAppUrl: "localhost:8080/",
            prophetRequest: {
                url: ''
            }
        }
    }

    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({"repository": e.currentTarget.value})
    };

    async onSubmit() {
        const response: any = await this.http;
    }

    http = async () => {
        this.state.prophetRequest.url = this.state.repository;
        try {
            const response = await fetch(this.state.prophetAppUrl, {
                method: "post",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }),
                body: JSON.stringify(this.state.prophetRequest)
            });
            return response.ok;
        } catch (ex) {
            return false;
        }
    }

    render() {
        return (
            <div className={this.classes.root}>
                <Paper className={this.classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap>message</Typography>
                        </Grid>
                    </Grid>
                </Paper>

                <Box component="span" m={1}>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>

                    <FormControlLabel
                        value="start"
                        control={<Checkbox color="primary" />}
                        label="Start"
                        labelPlacement="start"
                    />

                    <Button />
                </Box>




                https://github.com/<input type="text" value={this.state.repository} onChange={this.onChange}/>
                <button type="submit" onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }

}