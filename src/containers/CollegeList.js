import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dataFetchIntialized, dataFetchSuccess, dataFetchFailure } from '../actions/index';

const CollegeList = ({
  fetchIntialized, fetchSuccess, fetchFailure, colleges, isError, isLoading,
}) => {
  useEffect(() => {
    const data = async () => {
      fetchIntialized();
      try {
        const apiResult = await fetch('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
          .then((apiResult) => apiResult.json())
          .then((name) => name.data.medicalColleges);
        fetchSuccess(apiResult);
      } catch (error) {
        fetchFailure();
      }
    };
    data();
  }, []);

  return (
    <div>
      <li>
        {/* {collegeList.empty ? 'Loading...!!!' : collegeList } */}
      </li>
    </div>
  );
};

CollegeList.propTypes = {
  fetchIntialized: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
  colleges: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
};

CollegeList.defaultProps = {
  colleges: [],
  isError: false,
  isLoading: false,
};

const mapsStateToProps = (state) => ({
  colleges: state.colleges,
  isLoading: state.isLoading,
  isError: state.isError,
});

const mapsDispatchToProps = (dispatch) => ({
  fetchIntialized: () => dispatch(dataFetchIntialized()),
  fetchSuccess: (data) => dispatch(dataFetchSuccess(data)),
  fetchFailure: () => dispatch(dataFetchFailure()),
});

export default connect(mapsStateToProps, mapsDispatchToProps)(CollegeList);
