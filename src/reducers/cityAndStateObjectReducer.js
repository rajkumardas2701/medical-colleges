import { LOAD_CITY_STATE_OBJECT } from '../actions/index';

const cityAndStateObjectReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_CITY_STATE_OBJECT:
      return state;
    default:
      return state;
  }
};

export default cityAndStateObjectReducer;
