import { STATE_FILTER } from '../actions/index';

const stateCategoriesReducer = (state = 'All', action) => {
  switch (action.type) {
    case STATE_FILTER:
      return action.stateCategory;
    default:
      return state;
  }
};

export default stateCategoriesReducer;
