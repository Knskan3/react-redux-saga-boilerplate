import { expectSaga, testSaga } from 'redux-saga-test-plan';
import rootSaga, { delayer } from './saga';
import { actionExamplePut, actionExampleRequest } from '../actions';
import { ACTION_EXAMPLE_REQUEST } from '../constants';

describe('Sagas', () => {
    test('integration test', () =>
        expectSaga(rootSaga)
            // Assert that the `put` will eventually happen.
            .put(actionExamplePut(true))

            // Dispatch any actions that the saga will `take`.
            .dispatch(actionExampleRequest())

            // Start the test. Returns a Promise.
            .run());

    test('Unit test', () =>
        new Promise(accept => {
            testSaga(rootSaga)
                .next()
                .take(ACTION_EXAMPLE_REQUEST)
                .next()
                .call(delayer)
                .next()
                .put(actionExamplePut(true))
                .next()
                .isDone();
            accept();
        }));
});
