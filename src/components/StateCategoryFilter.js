import React from 'react';
import PropTypes from 'prop-types';

const StateCategoryFilter = ({ handleStateChange, allStateCategory }) => (
  <div>
    <span>Filter by State</span>
    <select onChange={handleStateChange} name="stateCategory">
      <option value="All">All</option>
      {allStateCategory.map((state) => (
        state ? <option key={state} value={state}>{state}</option> : null
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
