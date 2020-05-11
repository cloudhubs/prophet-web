import React from "react";
import {useGlobalState} from "../../state/appState";
import {RepoConfig} from "../../model/configuration/RepoConfig";
import SingleConfig from "../configuration/SingleConfig";

/**
 *
 * @constructor
 *
 */
const Configurations = () => {

    const [prophetConfigs] = useGlobalState('prophetConfigs');

    return (
        <React.Fragment>
            {prophetConfigs.repoConfigurations.map((config: RepoConfig) => (
                <React.Fragment>
                    <SingleConfig conf={config}  />
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}
export default Configurations;
