import React from "react";
import ConfigForm from "./ConfigForm";
import {Repository} from "../../model/Repository";

type ConfigProps = {
    conf: Repository
}
/**
 * Represents Configurations of a specific github repository
 * @param RepoConfig Repository configuration
 * @constructor
 * @action Update Configuration to parent component from ConfigForm
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
            <ConfigForm conf={conf}/>
        </>
    )

    const errorCodes = (
        <>

        </>
    )

    const footer = (
        <>

        </>
    );

    return (
        <React.Fragment>
            {header}
            {githubUrlInput}
            {footer}
        </React.Fragment>
    )
}
export default SingleConfig;
