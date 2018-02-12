
import component from './components/exampleComponent';
import ExampleComponent from './containers';
import { setParentPath } from './selectors';
import rootSaga from './sagas';
import rootReducer from './reducers';
import { STATE_KEY as stateKey } from './constants';

export {
    ExampleComponent, // name of the module (this is the container)
    component, // this is the component, only used for testing porpuses
    rootSaga,
    rootReducer,
    stateKey,
    setParentPath
};
