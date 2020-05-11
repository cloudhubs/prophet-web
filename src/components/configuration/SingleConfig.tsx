import React from "react";
import ConfigForm from "./ConfigForm";
import {RepoConfig} from "../../data/configuration/RepoConfig";

type ConfigProps = {
    conf: RepoConfig
}
/**
 * Represents Configurations of a specific github repository
 * @param RepoConfig Repository configuration
 * @constructor
 * @action Update RepoConfig to parent component from ConfigForm
 * @action Update Organization into OrganizationDetail
 * @action Update Repository into RepositoryDetail
 * @action Update Errors into ServerErrors
 * @component: ConfigForm, ServerErrors, OrganizationDetail, RepositoryDetail
 */
const SingleConfig = ({conf}: ConfigProps) => {

    const header = (
        <>

        </>
    );

    const githubUrlInput = (
        <>
            <ConfigForm />
        </>
    )

    const errorCodes = (
        <>
            {conf.analysisErrors.errors.map(err => {
                //input error to component
            })}
        </>
    )

    const footer = (
        <>

        </>
    );

    return (
        <React.Fragment>
            {header}

            {footer}
        </React.Fragment>
    )
}
export default SingleConfig;
