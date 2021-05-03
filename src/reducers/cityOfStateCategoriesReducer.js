import { LOAD_CITY_STATE } from '../actions/index';

const cityOfStateCategoriesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_CITY_STATE:
      return action.cityOfStateCategory;
    default:
      return state;
  }
};

export default cityOfStateCategoriesReducer;
