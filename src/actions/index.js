const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

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

export {
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  dataFetchIntialized,
  dataFetchSuccess,
  dataFetchFailure,
};
