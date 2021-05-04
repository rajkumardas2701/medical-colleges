import {
  dataFetchIntialized,
  dataFetchSuccess,
  dataFetchFailure,
} from '../../actions/index';

describe('actions', () => {
  describe('dataFetchIntialized', () => {
    it('returns an object with type property', () => {
      expect(dataFetchIntialized()).toEqual({ type: 'FETCH_START' });
    });
  });

  describe('dataFetchFailure', () => {
    it('returns an object with type property and payload', () => {
      expect(dataFetchFailure()).toEqual({ type: 'FETCH_FAILURE' });
    });
  });

  describe('dataFetchSuccess', () => {
    const data = {
      colleges: [{
        state: 'A & N Islands',
        name: 'Andaman & Nicobar Islands Insitute of Medical Sciences, Port Blair',
        city: 'Port Blair',
        ownership: 'Govt.',
        admissionCapacity: 100,
        hospitalBeds: 460,
      }],
    };
    it('returns an object with type property and payload', () => {
      expect(dataFetchSuccess(data)).toEqual({
        type: 'FETCH_SUCCESS',
        payload:
        {
          colleges: [{
            state: 'A & N Islands',
            name: 'Andaman & Nicobar Islands Insitute of Medical Sciences, Port Blair',
            city: 'Port Blair',
            ownership: 'Govt.',
            admissionCapacity: 100,
            hospitalBeds: 460,
          }],
        },
      });
    });
  });
});
