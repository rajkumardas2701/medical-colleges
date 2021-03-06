import { createStore, combineReducers } from 'redux';
import collegesReducer from './collegesReducer';
import { INITIAL_STATE } from '../constants/initialState';
import stateCategoriesReducer from './stateCategoriesReducer';
import allStateCategoriesReducer from './allStateCategoriesReducer';
import cityOfStateCategoriesReducer from './cityOfStateCategoriesReducer';
import cityCategoriesReducer from './cityCategoriesReducer';
import cityAndStateObjectReducer from './cityAndStateObjectReducer';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
  data: collegesReducer,
  stateCategories: stateCategoriesReducer,
  allStateCategory: allStateCategoriesReducer,
  cityOfStateCategory: cityOfStateCategoriesReducer,
  cityCategories: cityCategoriesReducer,
  cityAndStateObject: cityAndStateObjectReducer,
  details: detailsReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
