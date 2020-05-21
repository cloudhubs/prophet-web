import React from "react";
import {useGlobalState} from "../../state/appState";
import SingleConfig from "../configuration/SingleConfig";
import {Repository} from "../../model/Repository";

/**
 *
 * @constructor
 *
 */
const Configurations = () => {

    const [request] = useGlobalState('request');

    return (
        <React.Fragment>
            request
            {request.systemName}
            {request.repositories.map((m: Repository) => (
                <>
                    <SingleConfig conf={m}/>
                </>
            ))}
        </React.Fragment>
    )
}
export default Configurations;
