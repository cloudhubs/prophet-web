import { createGlobalState } from 'react-hooks-global-state';

export const { GlobalStateProvider, useGlobalState } = createGlobalState({
    repository: '',
    communicationGraph: '',

    person: {
        age: 0,
        firstName: '',
        lastName: '',
    },
});