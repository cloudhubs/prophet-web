import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import ActionsRegister from "../../state/ActionsRegister";

/**
 * @author Jan Svacina
 * @created May 8th 2020
 * @lastRevision May 8th 2020
 * @constructor
 * @description Gets Gihub URL from input
 */
const ConfigForm = () => {

    const [url, setUrl] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value)
        ActionsRegister.setGithubUrl(url);
    }
    return (
        <React.Fragment>
            <form noValidate autoComplete="off">
                <TextField
                    id="github-url"
                    type="text"
                    label="Label"
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
            </form>
        </React.Fragment>
    )
}
export default ConfigForm;
