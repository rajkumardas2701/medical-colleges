import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  dataFetchIntialized, dataFetchSuccess, dataFetchFailure, changeStateCategoryAction,
  loadStateCategoryAction, loadCityOfStateCategoryAction, changeCityCategoryAction,
  loadCityAndStateObjectAction,
} from '../actions/index';
import College from '../components/College';
import {
  pickCategories, pickStateCategories, pickCityCategories, pickCitiesOfState,
} from '../constants/fetchCategory';
import StateCategoryFilter from '../components/StateCategoryFilter';
import CityCategoryFilter from '../components/CityCategoryFilter';
import { apiUrl } from '../constants/initialState';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';

const CollegeList = ({
  fetchIntialized,
  fetchSuccess,
  fetchFailure,
  colleges,
  isError,
  isLoading,
  stateCategory,
  changeStateCategory,
  cityCategory,
  changeCityCategory,
  allStateCategory,
  loadStateCategories,
  cityOfStateCategory,
  loadCityCategories,
  // cityAndStateObject,
  loadStateAndCityObject,
}) => {
  let collegesFiltered = [];

  useEffect(() => {
    const data = async () => {
      fetchIntialized();
      try {
        const apiResult = await fetch(apiUrl)
          .then((apiResult) => apiResult.json())
          .then((name) => name.data.medicalColleges);
        fetchSuccess(apiResult);
        pickCategories(apiResult);
        loadStateCategories(pickStateCategories());
        loadStateAndCityObject(pickCityCategories());
      } catch (error) {
        fetchFailure();
      }
    };
    data();
  }, []);

  const handleStateChange = (event) => {
    changeStateCategory(event.target.value);
    if (event.target.value === 'All') {
      loadCityCategories(pickCitiesOfState('All'));
    } else {
      loadCityCategories(pickCitiesOfState(event.target.value));
    }
  };

  const handleCityChange = (event) => changeCityCategory(event.target.value);

  if (colleges.length === 0) {
    collegesFiltered = null;
  } else if (stateCategory === 'All' && cityCategory === 'All') {
    collegesFiltered = colleges;
  } else if (stateCategory && cityCategory === 'All') {
    collegesFiltered = colleges.filter((college) => college.state === stateCategory);
  } else {
    collegesFiltered = colleges.filter((college) => college.city === cityCategory);
  }
  return (
    <>
      <NavBar />
      <div>
        <h1>
          {isError
        && <div>Unable to fetch data at this moment, please try again later!</div>}
        </h1>
        <section>
          {
          isLoading ? (<div>Loading...!!!</div>)
            : (
              <>
                <StateCategoryFilter
                  handleStateChange={handleStateChange}
                  allStateCategory={allStateCategory}
                />
                <CityCategoryFilter
                  handleCityChange={handleCityChange}
                  cityOfStateCategory={cityOfStateCategory}
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
      <Footer />
    </>
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
  cityCategory: PropTypes.string.isRequired,
  changeStateCategory: PropTypes.func.isRequired,
  changeCityCategory: PropTypes.func.isRequired,
  allStateCategory: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loadStateCategories: PropTypes.func.isRequired,
  cityOfStateCategory: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loadCityCategories: PropTypes.func.isRequired,
  loadStateAndCityObject: PropTypes.func.isRequired,
};

CollegeList.defaultProps = {
  colleges: [],
  isError: false,
  isLoading: false,
  allStateCategory: [],
  cityOfStateCategory: [],
};

const mapsStateToProps = (state) => ({
  colleges: state.data.colleges,
  isLoading: state.data.isLoading,
  isError: state.data.isError,
  stateCategory: state.stateCategories,
  allStateCategory: state.allStateCategory,
  cityOfStateCategory: state.cityOfStateCategory,
  cityCategory: state.cityCategories,
  cityAndStateObject: state.cityAndStateObject,
});

const mapsDispatchToProps = (dispatch) => ({
  fetchIntialized: () => dispatch(dataFetchIntialized()),
  fetchSuccess: (data) => dispatch(dataFetchSuccess(data)),
  fetchFailure: () => dispatch(dataFetchFailure()),
  changeStateCategory: (stateCategory) => dispatch(changeStateCategoryAction(stateCategory)),
  changeCityCategory: (cityCategory) => dispatch(changeCityCategoryAction(cityCategory)),
  loadStateCategories: (allStateCategory) => dispatch(loadStateCategoryAction(allStateCategory)),
  loadCityCategories:
  (cityOfStateCategory) => dispatch(loadCityOfStateCategoryAction(cityOfStateCategory)),
  loadStateAndCityObject:
  (cityAndStateObject) => dispatch(loadCityAndStateObjectAction(cityAndStateObject)),
});

export default connect(mapsStateToProps, mapsDispatchToProps)(CollegeList);
