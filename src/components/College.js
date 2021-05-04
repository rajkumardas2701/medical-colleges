import React from 'react';
import PropTypes from 'prop-types';

const College = ({ college }) => (
  <ul>
    <li>
      <b>State:</b>
      {college.state}
    </li>
    <li>
      <b>Name:</b>
      {college.name}
    </li>
    <li>
      <b>City:</b>
      {college.city}
    </li>
    <li>
      <b>Ownership:</b>
      {college.ownership}
    </li>
    <li>
      <b>Beds:</b>
      {college.hospitalBeds}
    </li>
    <li>
      <b>Admission capacity:</b>
      {college.admissionCapacity}
    </li>
    <a href={`/details/${college.name}`}>Link</a>
  </ul>
);

College.propTypes = {
  state: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  ownership: PropTypes.string,
  hospitalBeds: PropTypes.string,
}.isRequired;

export default College;
