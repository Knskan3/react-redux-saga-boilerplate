import { createSelector } from 'reselect';
import { STATE_KEY } from '../constants';

let statePath = [STATE_KEY];

export const setParentPath = parentPath => {
    statePath = [...parentPath, ...statePath];

    // Children selectors to be called here for setup
};

const rootSelector = state => state.getIn(statePath);

const selector = createSelector(rootSelector, stateChunk => stateChunk.toJS());

export { selector };
