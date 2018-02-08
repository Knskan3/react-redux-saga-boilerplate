// src/reducers/index.js
import { combineReducers } from 'redux-immutable';
import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  // feel free to add more reducers here if needed ...
  exampleReducer,
});

export default rootReducer;
