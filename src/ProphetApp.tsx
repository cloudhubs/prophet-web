import React from "react";
import EffectsRegister from "./state/EffectsRegister";
import LoadingIndicator from "./shared/LoadingIndicator";
import AppHeader from "./components/main/AppHeader";
import MainCanvas from "./components/main/MainCanvas";
import AppFooter from "./components/main/AppFooter";
import prophetStyles from "./prophetStyles";
const ProphetApp = () => {
    const classes = prophetStyles();
    return (
        <div>
            <EffectsRegister />
            <LoadingIndicator />
            <AppHeader/>
            <div className={classes.content}>
                <MainCanvas/>
            </div>
            <div className={classes.footer}>
                <AppFooter/>
            </div>
        </div>
    );
}
export default ProphetApp;