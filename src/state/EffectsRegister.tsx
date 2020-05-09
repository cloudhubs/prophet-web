import React, { useEffect } from 'react';
import { dispatch, useGlobalState } from './appState';

const EffectsRegister = () => {
    const [githubUrl] = useGlobalState('githubUrl');

    useEffect(
        () => {
            console.log(githubUrl);
            //parse repository (sets repository or error)
            //parse organization (sets organization or error)
        },
        [githubUrl],
    );
    return(
        <></>
    );
}

export default EffectsRegister;
