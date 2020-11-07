import React from 'react';
import './Text.css';
import PropTypes from 'prop-types';

const Text = ({ children, size, weight, color, ...rest }) => (
  <p className={`text ${size} ${weight}`} style={{ color }} {...rest}>
    {children}
  </p>
);

export default Text;
Text.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
