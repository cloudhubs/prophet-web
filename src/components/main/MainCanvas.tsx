import React from "react";
import Configurations from "../canvas/Configurations";
import Diagrams from "../canvas/Diagrams";

/**
 *
 * @constructor
 *
 */
const MainCanvas = () => {

    return (
        <React.Fragment>
            <Configurations />
            <Diagrams/>
        </React.Fragment>
    )
}
export default MainCanvas;
