import React from "react";
import PrettyPrintJson from "../../utils/PrettyPrintJson";
import CloneLink from "./CloneLink";
import {Mermaid} from "../../../components/canvas/Mermaid";
import {Typography} from "@material-ui/core";
import CloneDetail from "./CloneDetail";

type Props = {
    clone: any;
    index: any;
}

const Clone = (props: Props) => {
    const diagram = "graph TD;\n" +
        "    PreserveController-- preserve ---PreserveService;\n" +
        "    PreserveService-->PreserveRepository;";
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Link
            </Typography>
            <CloneLink link={props.clone.msController.msId.path} />
            <Typography variant="h6" gutterBottom >
                Diagram
            </Typography>
            <div style={{overflow: 'auto'}}>
                <Mermaid chart={diagram} index={props.index}/>
            </div>
            <Typography variant="h6" gutterBottom>
                Key Properties
            </Typography>

            {<PrettyPrintJson data={props.clone} />}
            <CloneDetail clone={props.clone} />




        </div>
    );
}
export default Clone;