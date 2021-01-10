import React from "react";
import PrettyPrintJson from "./PrettyPrintJson";

type Props = {
    clone: any;
}

const Clone = (props: Props) => {
    return (
        <div>
            {<PrettyPrintJson data={props.clone} />}
        </div>
    );
}
export default Clone;