import React from 'react';
import './Text.css';
import PropTypes from 'prop-types';

const PageTitle = ({ children, ...rest }) => (
  <p className="pageTitle large bold" {...rest}>
    {children}
  </p>
);

export default PageTitle;
PageTitle.propTypes = {
  children: PropTypes.element.isRequired,
};
