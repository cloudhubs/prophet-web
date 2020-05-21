import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import ActionsRegister from "../../state/ActionsRegister";
import {Repository} from "../../model/Repository";
import Button from "@material-ui/core/Button";
import FetchMetadata from "../../http/FetchMetadata";
import DoAnalyze from "../../http/DoAnalyze";

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

    const [url, setUrl] = useState<string>("/cloudhubs/tms2");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
        ActionsRegister.setGithubUrl(url);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(url);
        await DoAnalyze.get();
    }

    return (
        <React.Fragment>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    id="github-url"
                    type="text"
                    style={{ margin: 8 }}
                    placeholder="Github URL here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={url}
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </React.Fragment>
    )
}
export default ConfigForm;
