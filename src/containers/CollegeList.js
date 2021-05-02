import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  dataFetchIntialized, dataFetchSuccess, dataFetchFailure, changeStateCategoryAction,
} from '../actions/index';
import College from '../components/College';
import pickCategories from '../constants/fetchCategory';

const CollegeList = ({
  fetchIntialized,
  fetchSuccess,
  fetchFailure,
  colleges,
  isError,
  isLoading,
  stateCategory,
  changeStateCategory,
}) => {
  useEffect(() => {
    const data = async () => {
      fetchIntialized();
      try {
        const apiResult = await fetch('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
          .then((apiResult) => apiResult.json())
          .then((name) => name.data.medicalColleges);
        fetchSuccess(apiResult);
        pickCategories(apiResult);
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
            : (colleges.map((college) => (<College college={college} key={uuidv4()} />)))
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
  stateCategory: PropTypes.string.isRequired,
  changeStateCategory: PropTypes.func.isRequired,
};

CollegeList.defaultProps = {
  colleges: [],
  isError: false,
  isLoading: false,
};

const mapsStateToProps = (state) => ({
  colleges: state.data.colleges,
  isLoading: state.data.isLoading,
  isError: state.data.isError,
  stateCategory: state.categories.stateCategory,
});

const mapsDispatchToProps = (dispatch) => ({
  fetchIntialized: () => dispatch(dataFetchIntialized()),
  fetchSuccess: (data) => dispatch(dataFetchSuccess(data)),
  fetchFailure: () => dispatch(dataFetchFailure()),
  changeStateCategory: (stateCategory) => dispatch(changeStateCategoryAction(stateCategory)),
});

export default connect(mapsStateToProps, mapsDispatchToProps)(CollegeList);
