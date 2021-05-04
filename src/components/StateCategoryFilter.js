import React from 'react';
import PropTypes from 'prop-types';
import '../styles/StateCategoryFilter.css';

const StateCategoryFilter = ({ handleStateChange, allStateCategory }) => (
  <div className="stateFilter">
    <span className="filterLabel">Filter by State </span>
    <select onChange={handleStateChange} name="stateCategory" className="dropDown">
      <option value="All" className="dropdownText">All</option>
      {allStateCategory.map((state) => (
        state ? <option key={state} value={state} className="dropdownText">{state}</option> : null
      ))}
    </select>
  </div>
);

StateCategoryFilter.propTypes = {
  handleStateChange: PropTypes.func.isRequired,
  allStateCategory: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

StateCategoryFilter.defaultProps = {
  allStateCategory: [],
};

export default StateCategoryFilter;
