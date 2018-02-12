import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { rootReducer, rootSaga, setParentPath } from '../src';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const appRootKey = 'APP';

const store = createStore(
    combineReducers({
        [appRootKey]: rootReducer
    }),
    enhancer
);

// this will trigger the children selectors initialisation
setParentPath([appRootKey]);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
