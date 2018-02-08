import { take, put, call } from 'redux-saga/effects';
import {
  ACTION_EXAMPLE_REQUEST,
} from '../constants';

export const delayer = () => (
  new Promise((resolve) => {
    setTimeout(resolve, 200);
  })
);

/**
 * Root Saga generator.
 */
const rootSaga = function* flow() {
  yield take(ACTION_EXAMPLE_REQUEST);
  yield call(delayer);
  yield put({ type: 'action/example-put', show: true });
};

export { rootSaga };
