import {
  actionExampleRequest,
  actionExamplePut,
} from './index';

import {
  ACTION_EXAMPLE_REQUEST,
  ACTION_EXAMPLE_PUT,
} from '../constants';

describe('Actions Generators', () => {
  describe('actionExampleRequest', () => {
    test('Should generate the action object properly', () => {
      const expectedActionObject = {
        type: ACTION_EXAMPLE_REQUEST,
      };

      expect(actionExampleRequest()).toEqual(expectedActionObject);
    });
  });
  describe('actionExamplePut', () => {
    test('Should generate the action object properly', () => {
      const expectedActionObject = {
        type: ACTION_EXAMPLE_PUT,
        show: true,
      };

      expect(actionExamplePut(true)).toEqual(expectedActionObject);
    });
  });
});
