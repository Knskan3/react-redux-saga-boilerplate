import { createSelector } from 'reselect';

const appRootSelector = (state) => (state.get('exampleReducer'));

const exampleSelector = createSelector(appRootSelector, (stateChunk) => stateChunk.toJS());

export {
  exampleSelector,
};
