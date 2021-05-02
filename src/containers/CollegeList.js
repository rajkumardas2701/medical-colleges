import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dataFetchIntialized, dataFetchSuccess, dataFetchFailure } from '../actions/index';
import College from '../components/College';

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
      <h1>{isError && <div>Unable to fetch data at this moment, please try again later!</div>}</h1>
      <section>
        {
          isLoading ? (<div>Loading...!!!</div>)
            : (colleges.map((college) => (<College college={college} key={college.name} />)))
        }
      </section>
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
  colleges: state.data.colleges,
  isLoading: state.isLoading,
  isError: state.isError,
});

const mapsDispatchToProps = (dispatch) => ({
  fetchIntialized: () => dispatch(dataFetchIntialized()),
  fetchSuccess: (data) => dispatch(dataFetchSuccess(data)),
  fetchFailure: () => dispatch(dataFetchFailure()),
});

export default connect(mapsStateToProps, mapsDispatchToProps)(CollegeList);
