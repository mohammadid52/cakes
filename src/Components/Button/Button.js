import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const MyButton = ({ children, variant, ...rest }) => (
  <button type="button" className={`button ${variant}`} {...rest}>
    {children}
  </button>
);

MyButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MyButton;
