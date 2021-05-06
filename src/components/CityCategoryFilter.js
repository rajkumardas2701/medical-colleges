import React from 'react';
import PropTypes from 'prop-types';
import '../styles/StateCategoryFilter.css';

const CityCategoryFilter = ({ handleCityChange, cityOfStateCategory }) => (
  <div className="stateFilter">
    <span className="filterLabel">Filter by City</span>
    <select onChange={handleCityChange} name="cityCategory" className="dropDown">
      <option value="All" className="dropdownText">All</option>
      {cityOfStateCategory.map((city) => (
        city ? <option key={city} value={city} className="dropdownText">{city}</option> : null
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
