import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SkillBar = ({ skill, details }) => (
  <div className="skill-bar">
    <h2>
      {skill}
    </h2>
    <progress max="4" value="2" />
    <details>
      <summary>
        See more...
      </summary>
      <p>
        {details}
      </p>
    </details>
  </div>
);

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default SkillBar;
