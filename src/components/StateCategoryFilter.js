import React from 'react';
import PropTypes from 'prop-types';
import { optionStateCategories } from '../constants/fetchCategory';

const StateCategoryFilter = ({ handleStateChange }) => (
  <div>
    <span>Filter by State</span>
    <select onChange={handleStateChange} name="stateCategory">
      <option value="All">All</option>
      {optionStateCategories}
    </select>
  </div>
);

StateCategoryFilter.propTypes = {
  handleStateChange: PropTypes.func.isRequired,
};

export default StateCategoryFilter;
