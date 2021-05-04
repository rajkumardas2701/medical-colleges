const INITIAL_STATE = {
  data: {
    colleges: [],
    isLoading: false,
    isError: false,
  },
  details: {
    colleges: [],
    isLoading: false,
    isError: false,
  },
  stateCategories: 'All',
  cityCategories: 'All',
  allStateCategory: [],
  cityOfStateCategory: [],
  cityAndStateObject: [],
};

const apiUrl = 'https://api.rootnet.in/covid19-in/hospitals/medical-colleges';

export { INITIAL_STATE, apiUrl };
