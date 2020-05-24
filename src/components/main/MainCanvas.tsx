import React from "react";
import Configurations from "../canvas/Configurations";
import Diagrams from "../canvas/Diagrams";
import {Box} from "@material-ui/core";

/**
 *
 * @constructor
 *
 */
const MainCanvas = () => {

    return (
        <React.Fragment>
            <Box m={2}>
                <Configurations />
                <Diagrams/>
            </Box>

        </React.Fragment>
    )
}

export default MainCanvas;
