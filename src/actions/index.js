const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';
const STATE_FILTER = 'STATE_FILTER';
const CITY_FILTER = 'CITY_FILTER';
const LOAD_ALL_STATE = 'LOAD_ALL_STATE';
const LOAD_CITY_STATE = 'LOAD_CITY_STATE';
const LOAD_CITY_STATE_OBJECT = 'LOAD_CITY_STATE_OBJECT';

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

const changeCityCategoryAction = (cityCategory) => ({
  type: CITY_FILTER,
  cityCategory,
});

const loadStateCategoryAction = (allStateCategory) => ({
  type: LOAD_ALL_STATE,
  allStateCategory,
});

const loadCityOfStateCategoryAction = (cityOfStateCategory) => ({
  type: LOAD_CITY_STATE,
  cityOfStateCategory,
});

const loadCityAndStateObjectAction = (cityAndStateObject) => ({
  type: LOAD_CITY_STATE_OBJECT,
  cityAndStateObject,
});

export {
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  STATE_FILTER,
  LOAD_ALL_STATE,
  LOAD_CITY_STATE,
  CITY_FILTER,
  LOAD_CITY_STATE_OBJECT,
  dataFetchIntialized,
  dataFetchSuccess,
  dataFetchFailure,
  changeStateCategoryAction,
  loadStateCategoryAction,
  loadCityOfStateCategoryAction,
  changeCityCategoryAction,
  loadCityAndStateObjectAction,
};
