import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import { apiUrl } from '../constants/initialState';
import { detailsFetchIntialized, detailsFetchSuccess, detailsFetchFailure } from '../actions/index';

const CollegeDetail = ({
  fetchInitialized, fetchSuccess, fetchFailure, colleges,
  isLoading, isError,
}) => {
  const { id } = useParams();
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

  const collegeObj = colleges.find((college) => college.name === id);

  return (
    <>
      {isError && <div>Someting went wrong. Please try again...</div>}
      <a href="/">Home</a>
      {
      isLoading ? (<div>Loading..!!!</div>) : (
        <div>
          {
            (collegeObj) ? (
              <ul>
                <li>
                  <b>State:</b>
                  {collegeObj.state}
                </li>
                <li>
                  <b>Name:</b>
                  {collegeObj.name}
                </li>
                <li>
                  <b>City:</b>
                  {collegeObj.city}
                </li>
                <li>
                  <b>Ownership:</b>
                  {collegeObj.ownership}
                </li>
                <li>
                  <b>Beds:</b>
                  {collegeObj.hospitalBeds}
                </li>
                <li>
                  <b>Admission capacity:</b>
                  {collegeObj.admissionCapacity}
                </li>
              </ul>
            ) : (<div>Please wait..!!</div>)
          }
        </div>
      )
      }
    </>
  );
};

CollegeDetail.defaultProps = {
  colleges: [],
  isLoading: false,
  isError: false,
};

CollegeDetail.propTypes = {
  fetchInitialized: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
  colleges: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

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
