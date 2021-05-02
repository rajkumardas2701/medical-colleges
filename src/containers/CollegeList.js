import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'redux';
// import { dataFetchIntialized, dataFetchSuccess, dataFetchFailure } from '../actions/index';

const CollegeList = ({ fetchIntialized, fetchSuccess, fetchFailure }) => {
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
};

export default CollegeList;
