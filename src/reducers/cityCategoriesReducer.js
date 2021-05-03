import { CITY_FILTER } from '../actions/index';

const cityCategoriesReducer = (state = 'All', action) => {
  switch (action.type) {
    case CITY_FILTER:
      return action.cityCategory;
    default:
      return state;
  }
};

export default cityCategoriesReducer;
