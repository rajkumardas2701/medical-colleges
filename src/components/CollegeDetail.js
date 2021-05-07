import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import { apiUrl } from '../constants/initialState';
import { detailsFetchIntialized, detailsFetchSuccess, detailsFetchFailure } from '../actions/index';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import '../styles/CollegeDetail.css';
import '../styles/CollegeList.css';

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
      <NavBar />
      <div className="detailsSection">
        {isError && <div>Someting went wrong. Please try again...</div>}
        {
      isLoading ? (<div className="loader" />) : (
        <div>
          {
            (collegeObj) ? (
              <div className="detailsContainer">
                <div className="detail-row">
                  <b>State</b>
                  <p>{collegeObj.state}</p>
                </div>
                <div className="detail-row">
                  <b>Name</b>
                  <p>{collegeObj.name}</p>
                </div>
                <div className="detail-row">
                  <b>City</b>
                  <p>{collegeObj.city}</p>
                </div>
                <div className="detail-row">
                  <b>Ownership</b>
                  <p>{collegeObj.ownership}</p>
                </div>
                <div className="detail-row">
                  <b>Beds</b>
                  <p>{collegeObj.hospitalBeds}</p>
                </div>
                <div className="detail-row">
                  <b>Admission capacity</b>
                  <p>{collegeObj.admissionCapacity}</p>
                </div>
              </div>
            ) : (<div className="waiting">Please wait..!!!</div>)
          }
        </div>
      )
      }
      </div>
      <Footer />
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
