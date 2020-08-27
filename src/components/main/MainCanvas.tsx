import React from "react";
import Configurations from "../canvas/Configurations";
import Diagrams from "../canvas/tabs/Diagrams";
import {Box} from "@material-ui/core";
import TabsLayout from "../canvas/tabs/TabsLayout";

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
                <TabsLayout />
            </Box>

        </React.Fragment>
    )
}

export default MainCanvas;
