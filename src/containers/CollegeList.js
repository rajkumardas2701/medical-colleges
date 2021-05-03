import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  dataFetchIntialized, dataFetchSuccess, dataFetchFailure, changeStateCategoryAction,
  loadStateCategoryAction,
} from '../actions/index';
import College from '../components/College';
import { pickCategories, pickStateCategories } from '../constants/fetchCategory';
import StateCategoryFilter from '../components/StateCategoryFilter';

const CollegeList = ({
  fetchIntialized,
  fetchSuccess,
  fetchFailure,
  colleges,
  isError,
  isLoading,
  stateCategory,
  changeStateCategory,
  allStateCategory,
  loadStateCategories,
}) => {
  let collegesFiltered = [];

  useEffect(() => {
    const data = async () => {
      fetchIntialized();
      try {
        const apiResult = await fetch('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
          .then((apiResult) => apiResult.json())
          .then((name) => name.data.medicalColleges);
        fetchSuccess(apiResult);
        pickCategories(apiResult);
        loadStateCategories(pickStateCategories());
        // console.log(pickStateCategories());
      } catch (error) {
        fetchFailure();
      }
    };
    data();
  }, []);

  const handleStateChange = (event) => changeStateCategory(event.target.value);

  if (colleges.length === 0) {
    collegesFiltered = null;
  } else if (stateCategory === 'All') {
    collegesFiltered = colleges;
  } else {
    collegesFiltered = colleges.filter((college) => college.state === stateCategory);
  }
  return (
    <div>
      <h1>{isError && <div>Unable to fetch data at this moment, please try again later!</div>}</h1>
      <section>
        {
          isLoading ? (<div>Loading...!!!</div>)
            : (
              <>
                <StateCategoryFilter
                  handleStateChange={handleStateChange}
                  allStateCategory={allStateCategory}
                />
                {
                (collegesFiltered)
                  ? (collegesFiltered.map((college) => (
                    <College college={college} key={uuidv4()} />
                  )))
                  : (
                    <div>Please wait...</div>
                  )
                }
              </>
            )
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
  allStateCategory: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loadStateCategories: PropTypes.func.isRequired,
};

CollegeList.defaultProps = {
  colleges: [],
  isError: false,
  isLoading: false,
  allStateCategory: [],
};

const mapsStateToProps = (state) => ({
  colleges: state.data.colleges,
  isLoading: state.data.isLoading,
  isError: state.data.isError,
  stateCategory: state.stateCategories,
  allStateCategory: state.allStateCategory,
});

const mapsDispatchToProps = (dispatch) => ({
  fetchIntialized: () => dispatch(dataFetchIntialized()),
  fetchSuccess: (data) => dispatch(dataFetchSuccess(data)),
  fetchFailure: () => dispatch(dataFetchFailure()),
  changeStateCategory: (stateCategory) => dispatch(changeStateCategoryAction(stateCategory)),
  loadStateCategories: (allStateCategory) => dispatch(loadStateCategoryAction(allStateCategory)),
});

export default connect(mapsStateToProps, mapsDispatchToProps)(CollegeList);
