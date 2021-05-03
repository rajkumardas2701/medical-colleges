import { createStore, combineReducers } from 'redux';
import collegesReducer from './collegesReducer';
import INITIAL_STATE from '../constants/initialState';
import stateCategoriesReducer from './stateCategoriesReducer';
import allStateCategoriesReducer from './allStateCategoriesReducer';

const rootReducer = combineReducers({
  data: collegesReducer,
  stateCategories: stateCategoriesReducer,
  allStateCategory: allStateCategoriesReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
