import React from 'react';
import PropTypes from 'prop-types';
import '../styles/College.css';

const College = ({ college }) => (
  <a href={`/details/${college.name}`} className="collegeAnc">
    <div className="collegeCard">
      <p className="colgName">
        {college.name}
      </p>
      <p className="colgOwner">
        {college.ownership}
        {' '}
        owned
      </p>
    </div>
  </a>
);

College.propTypes = {
  state: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  ownership: PropTypes.string,
  hospitalBeds: PropTypes.string,
}.isRequired;

export default College;
