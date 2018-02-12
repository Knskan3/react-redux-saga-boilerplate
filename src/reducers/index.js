// src/reducers/index.js
import { combineReducers } from 'redux-immutable';
import mainReducer from './reducer';
import { STATE_KEY } from '../constants';

const rootReducer = combineReducers({
    [STATE_KEY]: mainReducer
});

export default rootReducer;
