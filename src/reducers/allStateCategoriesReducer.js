import { LOAD_ALL_STATE } from '../actions/index';

const allStateCategoriesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_STATE:
      return action.allStateCategory;
    default:
      return state;
  }
};

export default allStateCategoriesReducer;
