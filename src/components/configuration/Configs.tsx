import React from "react";
import {useGlobalState} from '../../state/appState';
import {RepoConfiguration} from "../../data/configuration/RepoConfiguration";
import SingleConfig from "./SingleConfig";

const Configs = () => {

    const [prophetConfigs] = useGlobalState('prophetConfigs');

    return (
        <React.Fragment>
            {prophetConfigs.repoConfigurations.map((config: RepoConfiguration) => (
                <React.Fragment>
                    <SingleConfig conf={config}  />
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}
export default Configs;
