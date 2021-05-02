import { createStore, combineReducers } from 'redux';
import collegesReducer from './collegesReducer';
import INITIAL_STATE from '../constants/initialState';

const rootReducer = combineReducers({
  data: collegesReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
