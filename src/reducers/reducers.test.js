import { fromJS } from 'immutable';

import exampleReducer from './exampleReducer';

import { actionExamplePut } from '../actions';

Object.defineProperty(window.location, 'href', {
  value: 'http://www.casumo.com/en',
  writable: true,
});

describe('Reducers', () => {
  describe('Example', () => {
    test('Should update the state properly', () => {
      const state = fromJS({
        title: 'foobar',
        show: false,
      });

      const action = actionExamplePut(false);
      const newState = exampleReducer(state, action);

      expect(newState.get('show')).toEqual(false);
    });
  });
});
