import { changeStateCategoryAction } from '../../actions/index';
import stateCategoriesReducer from '../../reducers/stateCategoriesReducer';

describe('State categories reducer', () => {
  it('returns a category if action type is "CHANGE_FILTER"', () => {
    expect(stateCategoriesReducer('', changeStateCategoryAction('Goa'))).toEqual('Goa');
  });

  it('returns the unchanged state if there is no action type', () => {
    expect(stateCategoriesReducer('All', { type: 'RANDOM' })).toEqual('All');
  });
});
