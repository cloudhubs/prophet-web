import React from "react";
import PrettyPrintJson from "../utils/PrettyPrintJson";

const InconsistencyList = ({inconsistencyList}) => {

    return (
        <React.Fragment>
            {inconsistencyList && inconsistencyList.map((n) => (
                <PrettyPrintJson data={n} />
            ))}
        </React.Fragment>
    )
}
export default InconsistencyList;