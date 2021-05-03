import { createStore, combineReducers } from 'redux';
import collegesReducer from './collegesReducer';
import INITIAL_STATE from '../constants/initialState';
import stateCategoriesReducer from './stateCategoriesReducer';
import allStateCategoriesReducer from './allStateCategoriesReducer';
import cityOfStateCategoriesReducer from './cityOfStateCategoriesReducer';

const rootReducer = combineReducers({
  data: collegesReducer,
  stateCategories: stateCategoriesReducer,
  allStateCategory: allStateCategoriesReducer,
  cityOfStateCategory: cityOfStateCategoriesReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
