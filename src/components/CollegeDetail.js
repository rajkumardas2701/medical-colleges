import { useEffect } from 'react';
import { connect } from 'react-redux';
import { apiUrl } from '../constants/initialState';
import { detailsFetchIntialized, detailsFetchSuccess, detailsFetchFailure } from '../actions/index';

const CollegeDetail = ({
  fetchInitialized, fetchSuccess, fetchFailure,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      fetchInitialized();
      try {
        const apiResult = await fetch(apiUrl)
          .then((apiResult) => apiResult.json())
          .then((name) => name.data.medicalColleges);
        fetchSuccess(apiResult);
      } catch (error) {
        fetchFailure();
      }
    };
    fetchData();
  }, []);
};

// colleges, isLoading, isError,
// React,

const mapsStateToProps = (state) => ({
  colleges: state.details.colleges,
  isLoading: state.details.isLoading,
  isError: state.details.isError,
});

const mapsDispatchToProps = (dispatch) => ({
  fetchInitialized: () => dispatch(detailsFetchIntialized()),
  fetchSuccess: (data) => dispatch(detailsFetchSuccess(data)),
  fetchFailure: () => dispatch(detailsFetchFailure()),
});

export default connect(mapsStateToProps, mapsDispatchToProps)(CollegeDetail);
