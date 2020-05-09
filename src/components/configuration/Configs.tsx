import React from "react";
import {useGlobalState} from '../../state/appState';
import {RepoConfig} from "../../data/configuration/RepoConfig";
import SingleConfig from "./SingleConfig";

/**
 *
 * @constructor
 *
 */
const Configs = () => {

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
export default Configs;
