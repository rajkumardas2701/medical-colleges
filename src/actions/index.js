const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';
const STATE_FILTER = 'STATE_FILTER';
const LOAD_ALL_STATE = 'LOAD_ALL_STATE';
const LOAD_CITY_STATE = 'LOAD_CITY_STATE';

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

const loadStateCategoryAction = (allStateCategory) => ({
  type: LOAD_ALL_STATE,
  allStateCategory,
});

const loadCityOfStateCategoryAction = (cityOfStateCategory) => ({
  type: LOAD_CITY_STATE,
  cityOfStateCategory,
});

export {
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  STATE_FILTER,
  LOAD_ALL_STATE,
  LOAD_CITY_STATE,
  dataFetchIntialized,
  dataFetchSuccess,
  dataFetchFailure,
  changeStateCategoryAction,
  loadStateCategoryAction,
  loadCityOfStateCategoryAction,
};
