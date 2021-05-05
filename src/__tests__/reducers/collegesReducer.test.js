import { dataFetchIntialized, dataFetchSuccess, dataFetchFailure } from '../../actions/index';
import collegesReducer from '../../reducers/collegesReducer';

describe('collegesReducer', () => {
  const state = {
    colleges: [],
    isLoading: false,
    isError: false,
  };

  describe('action type is FETCH_START', () => {
    it('returns state after setting "isLoading" to "true"', () => {
      expect(collegesReducer(state, dataFetchIntialized())).toEqual(
        {
          colleges: [],
          isLoading: true,
          isError: false,
        },
      );
    });
  });

  describe('action type is FETCH_FAILURE', () => {
    it('returns state after setting "isLoading" to "false" and "isError" to "true"', () => {
      expect(collegesReducer(state, dataFetchFailure())).toEqual(
        {
          colleges: [],
          isLoading: false,
          isError: true,
        },
      );
    });
  });
});
