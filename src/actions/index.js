import { ACTION_EXAMPLE_PUT, ACTION_EXAMPLE_REQUEST } from '../constants';

export const actionExamplePut = show => ({
    type: ACTION_EXAMPLE_PUT,
    show
});

export const actionExampleRequest = () => ({
    type: ACTION_EXAMPLE_REQUEST
});
