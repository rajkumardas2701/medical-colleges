import { createStore, combineReducers } from 'redux';
import collegesReducer from './collegesReducer';

const INITIAL_STATE = {
  data: {
    colleges: [],
    isLoading: false,
    isError: false,
  },
};

const rootReducer = combineReducers({
  data: collegesReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
