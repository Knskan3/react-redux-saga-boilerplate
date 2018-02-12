import { fork } from 'redux-saga/effects';
import BPSaga from './saga';

export default function* rootSaga() {
    yield[
        fork(BPSaga)
        // add more children sagas here so they are chained upstairs
        // fork(anotherSaga)
    ];
}
