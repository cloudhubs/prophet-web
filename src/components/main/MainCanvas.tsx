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
            Main
            <Configurations />
            <Diagrams/>
        </React.Fragment>
    )
}
export default MainCanvas;
