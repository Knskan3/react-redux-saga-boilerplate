import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from '../reducers';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(logger),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
);

const store = createStore(
  rootReducer,
  enhancer,
);

// then run the saga
sagaMiddleware.run(rootSaga);

if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers/index').default; // eslint-disable-line
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
