import React from "react";
import {useGlobalState} from "../../state/appState";
import {RepoConfig} from "../../model/configuration/RepoConfig";
import SingleConfig from "../configuration/SingleConfig";
import {Ms} from "../../model/Ms";

/**
 *
 * @constructor
 *
 */
const Configurations = () => {

    const [ms] = useGlobalState('ms');

    return (
        <React.Fragment>
            {ms.map((m: Ms) => (
                <React.Fragment>
                    <SingleConfig conf={m}  />
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}
export default Configurations;
