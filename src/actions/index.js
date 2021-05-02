const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';
const STATE_FILTER = 'STATE_FILTER';

const dataFetchIntialized = () => ({
  type: FETCH_START,
});

const dataFetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const dataFetchFailure = () => ({
  type: FETCH_FAILURE,
});

const changeStateCategoryAction = (stateCategory) => ({
  type: STATE_FILTER,
  stateCategory,
});

export {
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  STATE_FILTER,
  dataFetchIntialized,
  dataFetchSuccess,
  dataFetchFailure,
  changeStateCategoryAction,
};
