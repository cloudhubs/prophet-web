import React, {useState} from "react";
import {Box, TextField} from "@material-ui/core";
import ActionsRegister from "../../state/ActionsRegister";
import {Repository} from "../../model/Repository";
import Button from "@material-ui/core/Button";
import FetchMetadata from "../../http/FetchMetadata";
import DoAnalyze from "../../http/DoAnalyze";
import {useGlobalState} from "../../state/appState";

type ConfigProps = {
    conf: Repository
}

/**
 * @author Jan Svacina
 * @created May 8th 2020
 * @lastRevision May 8th 2020
 * @constructor
 * @description Gets Gihub URL from input
 */
const ConfigForm = (conf: ConfigProps) => {

    const [url, setUrl] = useGlobalState('githubUrl');
    const [gitError] = useGlobalState('gitError');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
        //ActionsRegister.setGithubUrl(url);
    }

    /**
     * Stub function, should be replaced somewhere by an error check
     * @param u
     */
    const isError = (): boolean => {
        return false;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await DoAnalyze.get(url);
    }

    return (
        <Box m={1}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    id="github-url"
                    error={isError()}
                    label="Repository URL (GitHub /organization/repository)"
                    type="text"
                    style={{ margin: 8 }}
                    placeholder="GitHub URL here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={url}
                    onChange={handleChange}
                    helperText={gitError && <p>Repository does not exist!</p>}
                />

                <Button variant="contained" color="primary" type="submit">
                    Analyze
                </Button>
            </form>
        </Box>
    )
}
export default ConfigForm;
