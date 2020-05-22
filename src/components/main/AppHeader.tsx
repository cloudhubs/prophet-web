import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import prophetStyles from "../../prophetStyles";

/**
 *
 * @constructor
 *
 */
const AppHeader = () => {

    const classes = prophetStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Centralized Perspective of Microservice Mesh-Based Applications
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default AppHeader;
