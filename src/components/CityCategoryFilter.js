import React from 'react';
import PropTypes from 'prop-types';

const CityCategoryFilter = ({ handleCityChange, cityOfStateCategory }) => (
  <div>
    <span>Filter by City</span>
    <select onChange={handleCityChange} name="cityCategory">
      <option value="All">All</option>
      {cityOfStateCategory.map((city) => (
        city ? <option key={city} value={city}>{city}</option> : null
      ))}
    </select>
  </div>
);

CityCategoryFilter.propTypes = {
  handleCityChange: PropTypes.func.isRequired,
  cityOfStateCategory: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

CityCategoryFilter.defaultProps = {
  cityOfStateCategory: [],
};

export default CityCategoryFilter;
